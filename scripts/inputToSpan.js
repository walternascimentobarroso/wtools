'use strict';

function spanSwitch({ innerText: txt }) {
    elementEl.innerHTML = `<input onblur='spanReset(this)' value='${txt}' />`;
    document.getElementsByTagName('input')[0].focus();
}

function spanReset({ value }) {
    elementEl.innerHTML = `<span onclick='spanSwitch(this)'> ${value} </span>`;
}
