'use strict';

inputEl.addEventListener('input', changeText);

const reverse = () => inputEl.value.split('').reverse().join('');

function firstWord() {
    let text = inputEl.value.toLowerCase();
    return text[0].charAt(0).toUpperCase() + text.slice(1);
}

function alternate() {
    let text = inputEl.value.toLowerCase().split('');
    for (let i = 0; i < text.length; i = i + 2) {
        text[i] = text[i].toUpperCase();
    }
    return text.join('');
}

function firstLetter() {
    let text = inputEl.value.toLowerCase().split(' ');
    for (let i = 0; i < text.length; i++) {
        let w = text[i];
        if (!!w) text[i] = w[0].charAt(0).toUpperCase() + w.slice(1);
    }
    return text.join(' ');
}

function changeText() {
    uppercaseEl.value = inputEl.value.toUpperCase();
    lowercaseEl.value = inputEl.value.toLowerCase();
    alternateEl.value = alternate();
    reverseEl.value = reverse();
    firstWordEl.value = firstWord();
    firstLetterEl.value = firstLetter();
}
