const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);

function celsiusToFahrenheitAndKelvin() {
  const celsiusValue = parseFloat(celsiusInput.value);

  const fahrenheitValue = celsiusValue * 9/5 + 32;
  fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue;

  const kelvinValue = celsiusValue + 273.15;
  kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue;
}

function fahrenheitToCelsiusAndKelvin() {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);

  const celsiusValue = (fahrenheitValue - 32) * 5/9;
  celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue;

  const kelvinValue = (fahrenheitValue + 459.67) * 5/9;
  kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue;
}

function kelvinToCelsiusAndFahrenheit() {
  const kelvinValue = parseFloat(kelvinInput.value);

  const celsiusValue = kelvinValue - 273.15;
  celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue;

  const fahrenheitValue = kelvinValue * 9/5 - 459.67;
  fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue;
}

