'use strict';

const en = {
    title: 'Title',
    name: 'Name',
    password: 'Password',
};

const ptBr = {
    title: 'Titulo',
    name: 'Nome',
    password: 'Senha',
};

const elements = document.querySelectorAll('[data-i18n]');

let i18n = [];

function replaceText(el) {
    const key = el.dataset.i18n;
    el.innerText = i18n[key] || key;
}

function changeLang(lang) {
    i18n = eval(lang);
    elements.forEach((el) => replaceText(el));
}

changeEnEl.addEventListener('click', () => changeLang('en'));
changePtBrEl.addEventListener('click', () => changeLang('ptBr'));
