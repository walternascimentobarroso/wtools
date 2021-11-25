'use strict';

toggleEl.addEventListener('click', togglePass);

function togglePass() {
    return passwordEl.type == 'password' ? showPassword() : hidePassword();
}

function showPassword() {
    passwordEl.type = 'text';
    toggleEl.textContent = '🤩';
}

function hidePassword() {
    passwordEl.type = 'password';
    toggleEl.textContent = '😣';
}
