'use strict';

playEl.addEventListener('click', main);

function getRandom(min = 0, max = 2) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (res) => resolve(res.target.result);
        reader.onerror = (err) => reject(err);
        reader.readAsText(file);
    });
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

async function loadData(file) {
    if (!file) {
        return inputIniEl.value.split(/[\n|;]+/);
    }
    let data = (await readFile(file)).trim().split(/[\n|;]+/);
    fileEl.value = '';
    return data;
}

async function main() {
    resultEl.style.display = 'none';

    let data = await loadData(fileEl.files[0]);
    let result = [];

    while (inputEl.value != result.length) {
        let random = getRandom(0, data.length);
        if (!result.includes(data[random])) {
            result.push(data[random]);
        }
    }

    showResult(result);
}

function showResult(result) {
    outputEl.innerHTML = '';
    generateTable(outputEl, result);
    let { localeDate, localeTime } = dateNow();
    dateEl.innerHTML = localeDate;
    timeEl.innerHTML = localeTime;
    resultEl.style.display = 'block';
}
