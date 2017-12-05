document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let $textarea_base = document.querySelector('textarea[name="base"]'),
        $textarea_result = document.querySelector('textarea[name="result"]');

        $textarea_base.oninput = function() {
            $textarea_result.value = $textarea_base.value.toUpperCase();
        };
});