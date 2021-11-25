'use strict';

textEl.addEventListener('input', countText);

function countText() {
    let text = textEl.value;
    charactersEl.innerText = text.length;
    wordsEl.innerText = text.length == 0 ? 0 : text.split(/\s+/).length;
    rowsEl.innerText = text.length == 0 ? 0 : text.split(/\n/).length;
}
