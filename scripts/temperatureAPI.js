const CITY = document.querySelector('#city');
const TEMPERATURE = document.querySelector('#temperature');

const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8f57cb746c4c1d4b48b7f35eba6f6230';
const UNITS = 'metric';

navigator.geolocation.getCurrentPosition(loadUrl);

function loadUrl(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;
    fetchApi(url);
}

async function fetchApi(url) {
    let response = await fetch(url);
    let { main, name } = await response.json();
    let temperature = main.temp.toFixed(1);
    CITY.innerText = `${name}:`;
    TEMPERATURE.innerText = `${temperature} ºC`;
}
