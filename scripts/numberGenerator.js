'use strict';
/* Every element with an ID is already in the Global Scope */
generateEl.addEventListener('click', generate);
const separator = '; ';

function generate() {
    let type = document.form_main.type.value;
    let generatedNumbers = numbers[type](numberEl.value);
    /* Every element with an ID is already in the Global Scope */
    // You can use `.join(str)` to specify a custom separator!
    outputEl.innerHTML = generatedNumbers.join(separator);
}

const numbers = {
    real: (length) => Array.from({ length }, (value, i) => i),
    even: (length) => Array.from({ length }, (value, i) => i * 2),
    odd: (length) => Array.from({ length }, (value, i) => i * 2 + 1),
};
