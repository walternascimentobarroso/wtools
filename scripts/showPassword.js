'use strict';
const input = document.querySelector('input');
const button = document.querySelector('#togglePass');

button.addEventListener('click', togglePass);

function togglePass() {
    if (input.type == 'password') {
        input.type = 'text';
        button.textContent = '🤩';
    } else {
        input.type = 'password';
        button.textContent = '😣';
    }
}
