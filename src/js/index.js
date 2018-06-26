document.addEventListener("DOMContentLoaded", function() {
  "use strict";
  let $textarea_lower = document.querySelector('textarea[name="lower"]'),
    $textarea_upper = document.querySelector('textarea[name="upper"]');

  $textarea_lower.oninput = () => {
    $textarea_upper.value = $textarea_lower.value.toUpperCase();
    $textarea_lower.value = $textarea_upper.value.toLowerCase();
  };

  $textarea_upper.oninput = () => {
    $textarea_lower.value = $textarea_upper.value.toLowerCase();
    $textarea_upper.value = $textarea_lower.value.toUpperCase();
  };
});
