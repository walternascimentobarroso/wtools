'use strict';

cardEl.addEventListener('click', main);

const getRandom = () => Math.floor(Math.random() * 2);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function dateNow() {
    let date = new Date();
    let localeDate = date.toLocaleDateString('pt-BR', { dateStyle: 'long' });
    let localeTime = date.toLocaleTimeString('pt-BR', { timeStyle: 'medium' });
    return { localeDate, localeTime };
}

async function main() {
    resultEl.style.display = 'none';
    cardEl.classList.add('card-active');
    await sleep(3000);
    let result = getRandom() ? 'cara' : 'coroa';

    result == 'cara'
        ? cardEl.classList.remove('back-active')
        : cardEl.classList.add('back-active');

    cardEl.classList.remove('card-active');

    let { localeDate, localeTime } = dateNow();
    dateEl.innerHTML = localeDate;
    timeEl.innerHTML = localeTime;
    outputEl.innerHTML = result;
    resultEl.style.display = 'block';
}
