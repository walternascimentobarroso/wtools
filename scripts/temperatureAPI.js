'use strict';

const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
const KEY = '8f57cb746c4c1d4b48b7f35eba6f6230';
const UNITS = 'metric';

navigator.geolocation.getCurrentPosition(loadUrl);

function loadUrl({ coords }) {
    let lat = coords.latitude;
    let long = coords.longitude;
    let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${KEY}`;
    fetchApi(url);
}

async function fetchApi(url) {
    let response = await fetch(url);
    let { main, name } = await response.json();
    let temperature = main.temp.toFixed(1);
    cityEl.innerText = `${name}:`;
    temperatureEl.innerText = `${temperature} ºC`;
}
