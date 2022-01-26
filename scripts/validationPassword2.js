'use strict';

password.addEventListener('input', validation);

function validation() {
    minLength.style.color = checkMinLength();
    justNumber.style.color = checkNumber();
    notSequential.style.color = checkNotSequential();
}

const checkMinLength = () => (password.value.length < 6 ? 'red' : 'green');
const checkNumber = () => (password.value.match(/^[0-9]+$/) ? 'green' : 'red');

// check is number not is sequential
function checkNotSequential() {
    const reg = /(.)\1{2}/;
    return reg.test(password.value) ? 'red' : 'green';
}
