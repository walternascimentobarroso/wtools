document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let $textarea_lower = document.querySelector('textarea[name="lower"]'),
        $textarea_upper = document.querySelector('textarea[name="upper"]'),
        $textarea_alternate = document.querySelector('textarea[name="alternate"]'),
        $button_alternate = document.querySelector('button[name="alternate"]'),
        $textarea_reverse = document.querySelector('textarea[name="reverse"]'),
        $button_reverse = document.querySelector('button[name="reverse"]');

    $textarea_lower.oninput = () => {
        $textarea_upper.value = $textarea_lower.value.toUpperCase();
        $textarea_lower.value = $textarea_upper.value.toLowerCase();
    };

    $textarea_upper.oninput = () => {
        $textarea_lower.value = $textarea_upper.value.toLowerCase();
        $textarea_upper.value = $textarea_lower.value.toUpperCase();
    };

    $button_alternate.onclick = () => {
        let text = $textarea_lower.value.toLowerCase();
        text = text.split('');
        for (let i = 0; i < text.length; i = i + 2) {
            text[i] = text[i].toUpperCase();
        }
        text = text.join('');
        $textarea_alternate.value = text;
    };

    $button_reverse.onclick = () => {
        let text = $textarea_lower.value;
        text = text.split('').reverse().join('');
        $textarea_reverse.value = text;
    };
});
