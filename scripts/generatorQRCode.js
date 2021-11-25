'use strict';

generateEl.addEventListener('click', generate);

function generate() {
    qrcodeEl.innerHTML = ``;
    new QRCode(qrcodeEl, {
        text: textEl.value,
        width: widthEl.value,
        height: heightEl.value,
        colorDark: darkEl.value,
        colorLight: lightEl.value,
    });

    download();
}

function download() {
    const canvasEl = qrcodeEl.querySelector('canvas');
    const data = canvasEl.toDataURL('image/png');

    downloadEl.setAttribute('href', data);
    downloadEl.setAttribute('download', 'qrcode.png');
    downloadEl.style.display = 'inline-block';
}
