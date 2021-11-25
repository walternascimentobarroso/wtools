'use strict';

countEl.addEventListener('click', countDays);

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
    let dateIni = new Date(dateIniEl.value);
    let dateEnd = new Date(dateEndEl.value);

    let diff = dateEnd.getTime() - dateIni.getTime();

    daysEl.innerText = Math.floor(diff / day);
}
