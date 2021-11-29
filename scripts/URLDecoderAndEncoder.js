'use strict';

const encodeURL = () => (dataEl.value = encodeURIComponent(dataEl.value));
const decodeURL = () => (dataEl.value = decodeURIComponent(dataEl.value));

encodeEl.addEventListener('click', encodeURL);
decodeEl.addEventListener('click', decodeURL);
