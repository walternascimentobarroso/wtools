'use strict';

let initHour = document.querySelector('#initHour');
let initMin = document.querySelector('#initMin');
let initSec = document.querySelector('#initSec');

let endHour = document.querySelector('#endHour');
let endMin = document.querySelector('#endMin');
let endSec = document.querySelector('#endSec');

let outHour = document.querySelector('#outHour');
let outMin = document.querySelector('#outMin');
let outSec = document.querySelector('#outSec');

let fullOut = document.querySelector('#fullOut');

document.querySelector('#sum').addEventListener('click', sum);
document.querySelector('#subtract').addEventListener('click', subtract);

function inverter() {
    let tempHour = initHour.value;
    let tempMin = initMin.value;
    let tempSec = initSec.value;

    initHour.value = endHour.value;
    initMin.value = endMin.value;
    initSec.value = endSec.value;

    endHour.value = tempHour;
    endMin.value = tempMin;
    endSec.value = tempSec;
}

function subtract() {
    if (Number(initHour.value) < Number(endHour.value)) {
        inverter();
    }
    let time = {};
    let hour = 0;
    let minute = 0;
    let second = 0;

    time = verifyValue(Number(initSec.value), Number(endSec.value));
    second = time.valueOne;
    minute = time.valueTwo;

    time = verifyValue(Number(initMin.value), Number(endMin.value));
    minute += time.valueOne;
    hour = time.valueTwo;

    hour += Math.abs(Number(initHour.value) - Number(endHour.value));
    out(hour, minute, second);
}

function verifyValue(initValue, endValue) {
    let valueOne = 0;
    let valueTwo = 0;
    if (initValue < endValue) {
        valueOne += initValue + 60 - endValue;
        valueTwo--;
    } else {
        valueOne = Math.abs(initValue - endValue);
    }
    return { valueOne, valueTwo };
}

function sum() {
    let hour = Number(initHour.value) + Number(endHour.value);
    let minute = Number(initMin.value) + Number(endMin.value);
    if (minute >= 60) {
        hour++;
        minute -= 60;
    }
    let second = Number(initSec.value) + Number(endSec.value);
    if (second >= 60) {
        minute++;
        second -= 60;
    }
    out(hour, minute, second);
}

function out(hour, minute, second) {
    outHour.value = hour;
    outMin.value = minute;
    outSec.value = second;

    fullOut.innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(
        second
    )}`;
}

function addZero(input) {
    return input > 9 ? input : `0${input}`;
}
