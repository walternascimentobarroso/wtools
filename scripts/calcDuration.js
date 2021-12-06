'use strict';

function inverter() {
    let tempHour = initHourEl.value;
    let tempMin = initMinEl.value;
    let tempSec = initSecEl.value;

    initHourEl.value = endHourEl.value;
    initMinEl.value = endMinEl.value;
    initSecEl.value = endSecEl.value;

    endHourEl.value = tempHour;
    endMinEl.value = tempMin;
    endSecEl.value = tempSec;
}

function subtract() {
    if (Number(initHourEl.value) < Number(endHourEl.value)) {
        inverter();
    }
    let time = {};
    let hour = 0;
    let minute = 0;
    let second = 0;

    time = verifyValue(Number(initSecEl.value), Number(endSecEl.value));
    second = time.valueOne;
    minute = time.valueTwo;

    time = verifyValue(Number(initMinEl.value), Number(endMinEl.value));
    minute += time.valueOne;
    hour = time.valueTwo;

    hour += Math.abs(Number(initHourEl.value) - Number(endHourEl.value));
    out(hour, minute, second);
}

function verifyValue(initValue, endValue) {
    let valueOne = 0;
    let valueTwo = 0;
    if (initValue < endValue) {
        valueOne += initValue + 60 - endValue;
        valueTwo--;
        return { valueOne, valueTwo };
    }
    valueOne = Math.abs(initValue - endValue);
    return { valueOne, valueTwo };
}

function sum() {
    let hour = Number(initHourEl.value) + Number(endHourEl.value);
    let minute = Number(initMinEl.value) + Number(endMinEl.value);
    let second = Number(initSecEl.value) + Number(endSecEl.value);
    if (minute >= 60) {
        hour++;
        minute -= 60;
    }
    if (second >= 60) {
        minute++;
        second -= 60;
    }
    out(hour, minute, second);
}

function out(hour, minute, second) {
    outHourEl.value = hour;
    outMinEl.value = minute;
    outSecEl.value = second;

    fullOutEl.innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(
        second
    )}`;
}

const addZero = (input) => (input > 9 ? input : `0${input}`);

sumEl.addEventListener('click', sum);
subtractEl.addEventListener('click', subtract);
