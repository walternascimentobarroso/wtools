const execCopyEl = document.querySelector('#execCopy');
const clipboardCopyEl = document.querySelector('#clipboardCopy');
const inputEl = document.querySelector('#input');

// Type 1
function execCopy() {
    inputEl.select();
    document.execCommand('copy');
}

// Type 2
async function clipboardCopy() {
    let text = inputEl.value;
    await navigator.clipboard.writeText(text);
}

execCopyEl.addEventListener('click', execCopy);
clipboardCopyEl.addEventListener('click', clipboardCopy);
