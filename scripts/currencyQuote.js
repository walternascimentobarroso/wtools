'use strict';

const URL = 'https://api.exchangerate-api.com/v4/latest';

fromCurrencyEl.addEventListener('change', calculate);
fromAmmountEl.addEventListener('input', calculate);
toCurrencyEl.addEventListener('change', calculate);
toAmmountEl.addEventListener('input', calculate);
swapEl.addEventListener('click', infoSwap);

const getURL = async (url) => (await fetch(url)).json();

function main() {
    const currency = { BRL: 'Real', EUR: 'Euro', USD: 'Dollar' };
    let options = [];
    for (var [key, value] of Object.entries(currency)) {
        options.push(`<option value='${key}'>${value}</option>`);
    }
    fromCurrencyEl.innerHTML = options.join('\n');
    toCurrencyEl.innerHTML = options.join('\n');
    calculate();
}

function infoSwap() {
    const temp = fromCurrencyEl.value;
    fromCurrencyEl.value = toCurrencyEl.value;
    toCurrencyEl.value = temp;
    calculate();
}

const getInfoSelect = (select) => select.options[select.selectedIndex].text;

async function calculate() {
    const from = fromCurrencyEl.value;
    const to = toCurrencyEl.value;
    const { rates } = await getURL(`${URL}/${from}`);
    const rate = rates[to];

    const init = getInfoSelect(fromCurrencyEl);
    const end = getInfoSelect(toCurrencyEl);

    taxInfoEl.innerText = `1  ${init} = ${rate} ${end}`;
    toAmmountEl.value = (fromAmmountEl.value * rate).toFixed(2);
}

main();
