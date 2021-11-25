'use strict';

passwordEl.addEventListener('input', validPassword);

const regExpWeak = /[A-z]/;
const regExpMedium = /\d+/;
const regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

const min_week_password = 3;
const min_medium_password = 6;
const min_strong_password = 8;

function validPassword() {
    let input_week = passwordEl.value.match(regExpWeak);
    let input_medium = passwordEl.value.match(regExpMedium);
    let input_strong = passwordEl.value.match(regExpStrong);

    if (passwordEl.value) {
        if (
            passwordEl.value.length <= min_week_password &&
            (input_week || input_medium || input_strong)
        ) {
            outputEl.textContent = 'Your password is too week';
        }
        if (
            passwordEl.value.length >= min_medium_password &&
            ((input_week && input_medium) ||
                (input_medium && input_strong) ||
                (input_week && input_strong))
        ) {
            outputEl.textContent = 'Your password is medium';
        }
        if (
            passwordEl.value.length >= min_strong_password &&
            input_week &&
            input_medium &&
            input_strong
        ) {
            outputEl.textContent = 'Your password is strong';
        }
    }
}
