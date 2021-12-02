'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 85 * i)
    );

    setInterval(() => typeWriter(el), 7000);
}

typeWriter(elementEl);
