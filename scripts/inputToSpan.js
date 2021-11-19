const elementEl = document.querySelector('#element');

function spanSwitch(e) {
    let txt = e.innerText;

    elementEl.innerHTML = `<input onblur='spanReset(this)' value='${txt}' />`;
    document.getElementsByTagName('input')[0].focus();
}

function spanReset(e) {
    let txt = e.value;

    elementEl.innerHTML = `<span onclick='spanSwitch(this)'> ${txt} </span>`;
}
