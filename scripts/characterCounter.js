const charactersEl = document.getElementById("characters");
const wordsEl = document.getElementById("words");
const rowsEl = document.getElementById("rows");
function countText() {
    let text = document.form_main.text.value;
    charactersEl.innerText = text.length;
    wordsEl.innerText = text.length == 0 ? 0 : text.split(/\s+/).length;
    rowsEl.innerText = text.length == 0 ? 0 : text.split(/\n/).length;
}
