'use strict';

document.form_main.input.oninput = () => changeText();

function changeText() {
    document.form_main.uppercase.value =
        document.form_main.input.value.toUpperCase();
    document.form_main.lowercase.value =
        document.form_main.input.value.toLowerCase();
    alternate();
    reverse();
    firstWord();
    firstLetter();
}

function alternate() {
    let text = document.form_main.input.value.toLowerCase().split('');
    for (let i = 0; i < text.length; i = i + 2) {
        text[i] = text[i].toUpperCase();
    }
    document.form_main.alternate.value = text.join('');
}

function reverse() {
    let text = document.form_main.input.value.split('').reverse().join('');
    document.form_main.reverse.value = text;
}

function firstWord() {
    let text = document.form_main.input.value.toLowerCase();
    text = text[0].charAt(0).toUpperCase() + text.slice(1);
    document.form_main.first_word.value = text;
}

function firstLetter() {
    let text = document.form_main.input.value.toLowerCase().split(' ');
    for (let i = 0; i < text.length; i++) {
        let w = text[i];
        if (!!w) text[i] = w[0].charAt(0).toUpperCase() + w.slice(1);
    }
    document.form_main.first_letter.value = text.join(' ');
}
