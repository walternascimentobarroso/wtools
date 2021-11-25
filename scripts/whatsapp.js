'use strict';

const URL = 'https://wa.me/';

generateEl.addEventListener('click', generateLink);

function generateLink() {
    const number = numberEl.value;
    const message = messageEl.value;
    const end_url = `${URL}${number}?text=${message}`;
    outputEl.innerText = end_url;
}
