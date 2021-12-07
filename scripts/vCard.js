'use strict';

function downloadToFile(content, filename, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
}

function previewFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => (previewEl.src = reader.result);
}

const makeVCardVersion = () => `VERSION:3.0`;
const makeVCardInfo = (info) => `N:${info}`;
const makeVCardName = (name) => `FN:${name}`;
const makeVCardOrg = (org) => `ORG:${org}`;
const makeVCardTitle = (title) => `TITLE:${title}`;
const makeVCardPhoto = (img) => `PHOTO;TYPE=JPEG;ENCODING=b:[${img}]`;
const makeVCardTel = (phone) => `TEL;TYPE=WORK,VOICE:${phone}`;
const makeVCardAdr = (address) => `ADR;TYPE=WORK,PREF:;;${address}`;
const makeVCardEmail = (email) => `EMAIL:${email}`;
const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;

function makeVCard() {
    let vcard = `BEGIN:VCARD
${makeVCardVersion()}
${makeVCardInfo(cardInfoEl.value)}
${makeVCardName(nameEl.value)}
${makeVCardOrg(orgEl.value)}
${makeVCardTitle(titleEl.value)}
${makeVCardPhoto(previewEl.src)}
${makeVCardTel(telEl.value)}
${makeVCardAdr(addressEl.value)}
${makeVCardEmail(emailEl.value)}
${makeVCardTimeStamp()}
END:VCARD`;
    downloadToFile(vcard, 'vcard.vcf', 'text/vcard');
}

downloadEl.addEventListener('click', makeVCard);
fileEl.addEventListener('change', previewFile);
