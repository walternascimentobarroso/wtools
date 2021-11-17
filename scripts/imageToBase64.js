const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');
const preview = document.querySelector('img');

inputEl.addEventListener('change', previewFile);
textareaEl.addEventListener('input', previewText);
buttonEl.addEventListener('click', downloadFile);

function previewFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
        preview.src = reader.result;
        textareaEl.value = reader.result;
    };
}

function previewText(event) {
    let file = event.target.value.replace(/^data:image\/[a-z]+;base64,/, '');
    preview.src = `data:image/png;base64,${file}`;
}

function downloadFile() {
    let nameFile = 'Image.png';
    let a = document.createElement('a');
    a.href = preview.src;
    a.download = nameFile;
    a.click();
}
