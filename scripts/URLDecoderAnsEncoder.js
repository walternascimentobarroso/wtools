const data = document.querySelector('#data');
const encode = document.querySelector('#encode');
const decode = document.querySelector('#decode');

encode.addEventListener('click', encodeURL);
decode.addEventListener('click', decodeURL);

function encodeURL() {
    data.value = encodeURIComponent(data.value);
}

function decodeURL() {
    data.value = decodeURIComponent(data.value);
}
