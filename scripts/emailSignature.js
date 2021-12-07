'use strict';

let data = {
    intro: {
        nameEl: 'Walter',
        roleEl: 'Software Engineer',
        emailEl: 'walter@mail.com',
        phoneEl: '9999999',
        companyEl: 'Mobly',
        siteEl: 'mobly.com',
        adressEl: 'Sao Paulo/SP',
    },
    sociaMedia: {
        linkedinEl: 'a',
        twitterEl: 'a',
        facebookEl: 'a',
        skypeEl: 'a',
        youtubeEl: 'a',
        instagramEl: 'a',
        whatsappEl: 'a',
        githubEl: 'a',
        devtoEl: 'a',
    },
    avatar: {
        photoEl: '/img/avatar.png',
        linkPhotoEl: 'https://via.placeholder.com/500x150',
    },
    banner: {
        bannerEl: '/img/banner.png',
        linkBannerEl: 'https://via.placeholder.com/500x150',
    },
    font: {
        sizeEl: '12',
        colorEl: 'rgb(191, 6, 6)',
    },
    msg: {
        ptEl: false,
        enEl: false,
    },
};

function clipboardCopy() {
    createSelection(outputEl);
    document.execCommand('copy');
}

function createSelection(element) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStartBefore(element.firstChild);
    range.setEndAfter(element.lastChild);
    selection.removeAllRanges();
    selection.addRange(range);
}

const txtPt = `Esta mensagem contém informação confidencial, legalmente protegida e destinada ao uso exclusivo da pessoa acima nomeada. Caso o leitor não seja o seu destinatário, fica desde já notificado que a divulgação ou utilização da mesma são estritamente proibidas. Se esta mensagem foi recebida por engano, queira por favor nos informar imediatamente, respondendo este e-mail.`;
const txtEn = `This message transmission is intended only for the use of the addressee and may contain confidential information. If you are not the intended recipient, you are hereby notified that any use or dissemination of this communication is strictly prohibited. If received in error, please notify us immediately, by replying this message.`;

const styleHead = () =>
    `display: inline-block; border-left: 1px solid ${data.font.colorEl}; padding-left: 15px; font-size: ${data.font.sizeEl}px; color: ${data.font.colorEl};`;
const styleLinks = () =>
    `font-size: ${data.font.sizeEl}px; color: ${data.font.colorEl};display: block;text-decoration: none;`;
const styleSocialMedia = 'padding: 14px 8px 14px 0px; display: inline-block;';

const styleAvatar = 'float: left; margin-right: 12px; margin-top: 30px';
const styleBanner = 'margin: 14px 0px; display: block';

function getMobile() {
    return `<div style="margin-top: 5px; margin-bottom: 0px; margin-right: auto">
  <img
    src="/img/know.jpg"
    style="margin-top: 16px; border: 0"
    alt="know"
  />
  <a href="#" target="_blank">
    <img src="/img/appStore.png" alt="ios" />
  </a>
  <a href="#" target="_blank">
    <img src="/img/googlePlay.png" alt="android" />
  </a>
</div>`;
}

function getBanner({ banner }) {
    return `<div>
    <a href="${banner.linkBannerEl}" style="${styleBanner}" target="_blank">
      <img src="${banner.bannerEl}" alt="banner"/>
    </a></div>`;
}

function getAvatar({ avatar }) {
    return `
  <div style="${styleAvatar}">
    <a href="${avatar.linkPhotoEl}" target="_blank">
      <img src="${avatar.photoEl}" alt="avatar" width="75" />
    </a>
  </div>
  `;
}

function makeLinkSociaMedia(url, img, alt) {
    return `
  <a href="//${url}" style="${styleSocialMedia}" target="_blank">
    <img src="${img}" alt="${alt}" />
  </a>
  `;
}

function getSocialMedia({ sociaMedia }) {
    let sociaMediaOut = '';
    let media = [
        'linkedinEl',
        'twitterEl',
        'facebookEl',
        'skypeEl',
        'youtubeEl',
        'instagramEl',
        'whatsappEl',
        'githubEl',
        'devtoEl',
    ];

    media.forEach((item) => {
        if (sociaMedia[item]) {
            sociaMediaOut += makeLinkSociaMedia(
                sociaMedia[item],
                `/img/${item}.png`,
                item
            );
        }
    });
    return `<div>${sociaMediaOut}</div>`;
}

const makeLink = (link, description) =>
    `<a href="${link}" style="${styleLinks()}" target="_blank">${description}</a>`;

function getHead({ intro }) {
    return `<div style="${styleHead()}">
    <div><strong>${intro.nameEl}</strong></div>
    <div><em>${intro.roleEl}</em></div>
    ${makeLink(`mailto:${intro.emailEl}`, intro.emailEl)}
    ${makeLink(`tel:${intro.phoneEl}`, intro.phoneEl)}
    ${makeLink(`//${intro.companyEl}`, intro.companyEl)}
    ${makeLink(`//${intro.siteEl}`, intro.siteEl)}
    ${makeLink(`//maps.google.com/?q=${intro.adressEl}`, intro.adressEl)}
  </div>`;
}
let styleConfidentialMessage = `font-size: 9px; color: gray;display: block;text-decoration: none;`;

function getConfidentialMessage({ msg }) {
    let addTxt = msg.ptEl ? `<div>${txtPt}</div><br />` : '';
    addTxt += msg.enEl ? `<div>${txtEn}</div><br />` : '';
    return `<div style="${styleConfidentialMessage}">${addTxt}</div>`;
}

function getTemplat() {
    let head = getHead(data);
    let socialMedia = getSocialMedia(data);
    let avatar = getAvatar(data);
    let banner = getBanner(data);
    let mobile = getMobile();
    let msg = getConfidentialMessage(data);
    outputEl.innerHTML = `
  ${avatar}
  <div>
    ${head}
    ${socialMedia}
  </div>
  ${mobile}
  ${banner}
  ${msg}
  `;
}

function changeAllTemplat({ target: { id } }, component) {
    data[component][id] = eval(`${id}.value`);
    getTemplat();
}

function addMsg({ target: { id } }) {
    data.msg[id] = !data.msg[id];
    getTemplat();
}

[nameEl, roleEl, emailEl, phoneEl, companyEl, siteEl, adressEl].map((el) =>
    el.addEventListener('input', (el) => changeAllTemplat(el, 'intro'))
);
[
    linkedinEl,
    twitterEl,
    facebookEl,
    skypeEl,
    youtubeEl,
    instagramEl,
    whatsappEl,
    githubEl,
    devtoEl,
].map((el) =>
    el.addEventListener('input', (el) => changeAllTemplat(el, 'sociaMedia'))
);
[photoEl, linkPhotoEl].map((el) =>
    el.addEventListener('input', (el) => changeAllTemplat(el, 'avatar'))
);
[bannerEl, linkBannerEl].map((el) =>
    el.addEventListener('input', (el) => changeAllTemplat(el, 'banner'))
);
[sizeEl, colorEl].map((el) =>
    el.addEventListener('input', (el) => changeAllTemplat(el, 'font'))
);
[ptEl, enEl].map((el) => el.addEventListener('click', addMsg));
clipboardCopyEl.addEventListener('click', clipboardCopy);
