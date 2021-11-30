'use strict';

playEl.addEventListener('click', main);

function getRandom(min = 0, max = 2) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function dateNow(input = Date.now()) {
    let date = new Date(input);
    let localeDate = date.toLocaleDateString('pt-BR', { dateStyle: 'long' });
    let localeTime = date.toLocaleTimeString('pt-BR', { timeStyle: 'medium' });
    return { localeDate, localeTime };
}

function generateTable(table, data) {
    for (let [key, value] of data.entries()) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(`${key + 1}°`);
        cell.appendChild(text);

        cell = row.insertCell();
        text = document.createTextNode(`${value}`);
        cell.appendChild(text);
    }
}

function main() {
    resultEl.style.display = 'none';
    let loop = inputEl.value;
    let ini = inputIniEl.value;
    let end = parseInt(inputEndEl.value) + 1;
    let result = [];

    while (loop) {
        let random = getRandom(ini, end);
        if (!result.includes(random)) {
            result.push(random);
            loop--;
        }
    }

    outputEl.innerHTML = '';
    generateTable(outputEl, result);

    let { localeDate, localeTime } = dateNow();
    dateEl.innerHTML = localeDate;
    timeEl.innerHTML = localeTime;
    resultEl.style.display = 'block';
}
