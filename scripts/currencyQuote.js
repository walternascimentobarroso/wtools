'use strict';

const label_from_currency = document.querySelector('#from_currency');
const input_from_ammount = document.querySelector('#from_ammount');
const label_to_currency = document.querySelector('#to_currency');
const input_to_ammount = document.querySelector('#to_ammount');

const tax_info = document.querySelector('#tax_info');
const swap = document.querySelector('#swap');

label_from_currency.addEventListener('change', calculate);
input_from_ammount.addEventListener('input', calculate);
label_to_currency.addEventListener('change', calculate);
input_to_ammount.addEventListener('input', calculate);
swap.addEventListener('click', infoSwap);

main();

function main() {
    let currency = { BRL: 'Real', EUR: 'Euro', USD: 'Dollar' };
    let options = [];
    for (var [key, value] of Object.entries(currency)) {
        options.push(`<option value='${key}'>${value}</option>`);
    }
    label_from_currency.innerHTML = options.join('\n');
    label_to_currency.innerHTML = options.join('\n');
    calculate();
}

function infoSwap() {
    let temp = label_from_currency.value;
    label_from_currency.value = label_to_currency.value;
    label_to_currency.value = temp;
    calculate();
}

async function getURL(url) {
    return (await fetch(url)).json();
}

function getInfoSelect(select) {
    return select.options[select.selectedIndex].text;
}

async function calculate() {
    let from = label_from_currency.value;
    let to = label_to_currency.value;
    let { rates } = await getURL(
        `https://api.exchangerate-api.com/v4/latest/${from}`
    );
    let rate = rates[to];
    tax_info.innerText = `1 ${getInfoSelect(
        label_from_currency
    )} = ${rate} ${getInfoSelect(label_to_currency)}`;
    input_to_ammount.value = (input_from_ammount.value * rate).toFixed(2);
}
