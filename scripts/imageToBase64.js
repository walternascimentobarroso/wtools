'use strict';

fileEl.addEventListener('change', previewFile);
textareaEl.addEventListener('input', previewText);
downloadEl.addEventListener('click', downloadFile);

function previewFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
        previewEl.src = reader.result;
        textareaEl.value = reader.result;
    };
}

function previewText(event) {
    let file = event.target.value.replace(/^data:image\/[a-z]+;base64,/, '');
    previewEl.src = `data:image/png;base64,${file}`;
}

function downloadFile() {
    let nameFile = 'Image.png';
    let a = document.createElement('a');
    a.href = previewEl.src;
    a.download = nameFile;
    a.click();
}
