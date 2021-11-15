'use strict';

const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');
const millisecondEl = document.querySelector('#millisecond');

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => {
        timer();
    }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    hourEl.innerText = '00';
    minuteEl.innerText = '00';
    secondEl.innerText = '00';
    millisecondEl.innerText = '000';
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    hourEl.innerText = returnData(hour);
    minuteEl.innerText = returnData(minute);
    secondEl.innerText = returnData(second);
    millisecondEl.innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`;
}
