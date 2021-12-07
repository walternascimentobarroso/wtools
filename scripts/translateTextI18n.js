'use strict';

const getURL = async (url) => (await fetch(url)).json();

function updateContent() {
    titleEl.innerHTML = i18next.t('title', { what: 'i18next' });
    saveBtnEl.innerHTML = i18next.t('button.save', { count: 10 });
}

async function loadLanguage() {
    let en = await getURL(`locales/en-US.json`);
    let pt = await getURL(`locales/pt-BR.json`);

    await i18next.init({ resources: { pt, en }, lng: navigator.language });
}

i18next.on('languageChanged', () => updateContent());
changeEnEl.addEventListener('click', () => i18next.changeLanguage('en'));
changePtBrEl.addEventListener('click', () => i18next.changeLanguage('pt'));
loadLanguage();
