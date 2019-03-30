document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let $textarea_lower = document.querySelector('textarea[name="lower"]'),
        $textarea_upper = document.querySelector('textarea[name="upper"]'),
        $textarea_others = document.querySelector('textarea[name="others"]'),
        $button_AlTeRnAdO = document.querySelector('button[name="alternate"]');

    $textarea_lower.oninput = () => {
        $textarea_upper.value = $textarea_lower.value.toUpperCase();
        $textarea_lower.value = $textarea_upper.value.toLowerCase();
    };

    $textarea_upper.oninput = () => {
        $textarea_lower.value = $textarea_upper.value.toLowerCase();
        $textarea_upper.value = $textarea_lower.value.toUpperCase();
    };

    $button_AlTeRnAdO.onclick = () => {
        let text = $textarea_lower.value.toLowerCase();
        text = text.split('');
        for (let i = 0; i < text.length; i = i + 2) {
            text[i] = text[i].toUpperCase();
        }
        text = text.join('');
        $textarea_others.value = text;
    };

});
