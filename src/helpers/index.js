const api = "https://api.nbp.pl/api/exchangerates/rates/C",
  format = "?format=json";

function loader(loading) {
  let btn = document.querySelector("button");
  if (loading) {
    btn.classList.add("loader");
    btn.textContent = "";
    btn.setAttribute("disabled", true);
  } else {
    btn.classList.remove("loader");
    btn.textContent = "Przelicz";
    btn.removeAttribute("disabled");
  }
}

function handleError(msg = null) {
  document.querySelector(".errors").textContent = msg;
  loader(false);
}

function convertCurrency(bid, value) {
  const converted = parseFloat(bid * value).toFixed(2);
  document.querySelector(".currencyValue").textContent = converted;
  loader(false);
}

export async function getCurrency(form) {
  form.preventDefault();

  const data = form.target,
    value = parseFloat(data.querySelector(".value").value),
    code = data.querySelector("#currencyStart").value,
    url = `${api}/${code}/today${format}`;
  if (!value) {
    handleError("Wartość nie może być pusta!");
    return false;
  } else {
    handleError();
  }

  loader(true);

  setTimeout(async () => {
    await fetchUrl(url)
      .then(({ rates }) => {
        convertCurrency(rates[0].bid, value);
      })
      .catch((e) => {
        handleError("Wystąpił błąd podczas próby pobierania danych");
      });
  }, 800);
}

async function fetchUrl(url) {
  const data = fetch(url);
  return (await data).json;
}
