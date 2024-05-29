const router = require("express").Router();
const fs = require("fs");

const data = require("../resources/starwar.json");
const starWars = new Map();

Object.entries(data).forEach(([key, char]) => {
  starWars.set(key, char);
});

const speciesMap = new Map();

// Iterar sobre cada entrada del Map y agregar las especies al nuevo Map si no están presentes
starWars.forEach((value, key) => {
  if (!speciesMap.has(value.species)) {
    speciesMap.set(value.species, key);
  }
});

const homeworldMap = new Map();

// Iterar sobre cada entrada del Map y agregar las especies al nuevo Map si no están presentes
starWars.forEach((value, key) => {
  if (!homeworldMap.has(value.homeworld)) {
    homeworldMap.set(value.homeworld, key);
  }
});

router.get("/", (req, res) => {
  res.render("main.ejs", {
    title: "Parcial #1",
    //SE ENVIA EL JSON
    data: starWars,
    species: speciesMap,
    homeworld: homeworldMap,
  });
});

const filterMap = new Map();

router.get("/:homeworld/:species", (req, res) => {
  const { homeworld, species } = req.params;

  filterMap.clear();

  starWars.forEach((value, key) => {
    if (value.homeworld === homeworld) {
      filterMap.set(key, value);
    }
  });

  console.log(filterMap);

  res.render("filter.ejs", {
    title: "Filter",
    data: starWars,
    species: speciesMap,
    homeworld: homeworldMap,
  });
});

module.exports = router;
