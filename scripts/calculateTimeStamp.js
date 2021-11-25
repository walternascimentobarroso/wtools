'use strict';

generateTimestampToDate.addEventListener('click', timestampToDate);
generateDateToTimestamp.addEventListener('click', dateToTimestamp);

function dateToTimestamp() {
    let timestamp = new Date(`${dateIniEl.value} ${hourIniEl.value}`).getTime();
    timestampEl.innerText = timestamp;
}

function timestampToDate() {
    let dateIni = new Date(parseInt(timestampEndEl.value));
    dateEl.innerText = dateIni.toLocaleString('pt-BR');
}
