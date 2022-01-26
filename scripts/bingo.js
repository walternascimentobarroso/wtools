'use strict';

const itemB = document.querySelector('.item-b');
const itemI = document.querySelector('.item-i');
const itemN = document.querySelector('.item-n');
const itemG = document.querySelector('.item-g');
const itemO = document.querySelector('.item-o');

let allNumberSelected = [];
let allNumbers = [...Array(75).keys()].map((x) => ++x);
const addItem = (el, value) => {
    allNumberSelected.push(value);
    outputEl.innerHTML = value;
    el.innerHTML = el.innerHTML + `<div class="list-item">${value}</div>`;
    showHistory();
};

function showHistory() {
    historyEl.innerHTML = allNumberSelected.join(', ');
}

const getRandom = (min = 1, max = 75) =>
    Math.floor(Math.random() * (max - min)) + min;

function sortNumber() {
    let index = getRandom(0, allNumbers.length);
    let value = allNumbers[index];
    allNumbers.splice(index, 1);

    switch (true) {
        case value <= 15:
            addItem(itemB, `B${value}`);
            break;
        case value <= 30:
            addItem(itemI, `I${value}`);
            break;
        case value <= 45:
            addItem(itemN, `N${value}`);
            break;
        case value <= 60:
            addItem(itemG, `G${value}`);
            break;
        case value <= 75:
            addItem(itemO, `O${value}`);
            break;
        default:
            break;
    }
}

function reset() {
    historyEl.innerHTML = '...';
    outputEl.innerHTML = '...';
    allNumberSelected = [];
    allNumbers = [...Array(75).keys()].map((x) => ++x);
    itemB.innerHTML = '';
    itemI.innerHTML = '';
    itemN.innerHTML = '';
    itemG.innerHTML = '';
    itemO.innerHTML = '';
}

sortNumberEl.addEventListener('click', sortNumber);
resetEl.addEventListener('click', reset);
