'use strict';

// Type 1
function execCopy() {
    inputEl.select();
    document.execCommand('copy');
}

// Type 2
const copy = async () => await navigator.clipboard.writeText(inputEl.value);

execCopyEl.addEventListener('click', execCopy);
clipboardCopyEl.addEventListener('click', copy);
