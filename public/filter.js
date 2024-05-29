document.getElementById("btnSend").addEventListener("click", () => {
  const homeworld = document.getElementById("homeworld").value;
  const species = document.getElementById("species").value;

  const filter = {
    homeworld: homeworld,
    species: species,
  };

  if (homeworld == "SF" && species == "SF") {
    const URL = "/";
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => alert(err));
  } else {
    const URL = `/${homeworld}/${species}`;
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => alert(err));
  }
});
