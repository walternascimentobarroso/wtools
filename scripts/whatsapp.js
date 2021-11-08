const outputEl = document.getElementById('end_url');
const URL = 'https://wa.me/';

function generateLink() {
    let number = document.form_main.number.value;
    let message = document.form_main.message.value;
    let end_url = `${URL}${number}?text=${message}`;
    outputEl.innerText = end_url;
}
