'use strict';

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

const pause = () => clearInterval(cron);

function start() {
    pause();
    cron = setInterval(() => timer(), 10);
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

const returnData = (input) => (input > 10 ? input : `0${input}`);

startEl.addEventListener('click', start);
pauseEl.addEventListener('click', pause);
resetEl.addEventListener('click', reset);
