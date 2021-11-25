'use strict';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

dateEl.addEventListener('blur', resetCountdown);

let count_down = theBigDay();
let x = setInterval(() => countDown(), second);

function theBigDay(year = 10) {
    let bigDay = new Date();
    bigDay.setFullYear(bigDay.getFullYear() + year);

    return new Date(bigDay).getTime();
}

function countDown() {
    let now = new Date(Date.now()).getTime();
    let diff = count_down - now;

    daysEl.innerText = Math.floor(diff / day);
    hoursEl.innerText = Math.floor((diff % day) / hour);
    minutesEl.innerText = Math.floor((diff % hour) / minute);
    secondsEl.innerText = Math.floor((diff % minute) / second);
}

function resetCountdown() {
    clearInterval(x);
    count_down = new Date(`${dateEl.value} 00:00:00`).getTime();
    x = setInterval(() => countDown(), second);
}
