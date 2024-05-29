document.getElementById("btnSend").addEventListener("click", () => {
  const code = document.getElementById("code").value;
  const description = document.getElementById("description").value;
  const stock = document.getElementById("stock").value;
  const value = document.getElementById("value").value;
  const stock_min = document.getElementById("stock_min").value;

  const product = {
    code: code,
    description: description,
    stock: stock,
    value: value,
    stock_min: stock_min,
  };

  const URL = "/";
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((data) => data.json())
    .then(() => console.log(data))
    .catch((err) => alert(err));
});
