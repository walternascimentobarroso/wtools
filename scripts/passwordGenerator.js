'use strict';

function generatePassword() {
    let randomFunc = {
        randomLower: () => tableASCII(26, 97),
        randomUpper: () => tableASCII(26, 65),
        randomNumber: () => tableASCII(10, 48),
        randomSymbol: () => randomSymbol(),
    };

    !lowercaseEl.checked && delete randomFunc.randomLower;
    !uppercaseEl.checked && delete randomFunc.randomUpper;
    !numberEl.checked && delete randomFunc.randomNumber;
    !symbolEl.checked && delete randomFunc.randomSymbol;

    resultEl.innerText = randomPassword(lengthEl.value, randomFunc);
}

function randomPassword(length, randomFunc) {
    try {
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            generatedPassword += randomObject(randomFunc)();
        }
        return generatedPassword;
    } catch (e) {
        console.warn(e);
        return 'Marque pelo menos um item';
    }
}

const randomObject = (obj) =>
    obj[Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)]];

const tableASCII = (ini, start) =>
    String.fromCharCode(Math.floor(Math.random() * ini) + start);

function randomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generateEl.addEventListener('click', generatePassword);
