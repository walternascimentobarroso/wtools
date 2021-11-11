const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

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
    let date_end = document.form_main.date_end.value;
    count_down = new Date(`${date_end} 00:00:00`).getTime();
    x = setInterval(() => countDown(), second);
}
