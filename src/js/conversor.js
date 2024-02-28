const datoFahrenheit = document.querySelector("#datoFahrenheit");
const datoKelvin = document.querySelector("#datoKelvin");
const btnDato = document.querySelector("button");

function conversor() {
  let celcius = document.querySelector("#celcius").value;
  let fahrenheit = (celcius * 9) / 5 + 32;
  let kelvin = parseFloat(celcius) + 273.15;
  datoFahrenheit.innerHTML = `<h4>${fahrenheit}° fahrenheit</h4>`
  datoKelvin.innerHTML = `<h4>${kelvin}° kelvin`
}

btnDato.onclick = function () {
  conversor();
};
