'use strict';

const mainEl = document.querySelector('main');

const cards = [
    { url: '/whatsapp.html', description: 'Whatsapp' },
    { url: '/validatorPassword.html', description: 'Validator Password' },
    { url: '/transformingLetters.html', description: 'Transforming Letters' },
    { url: '/todo.html', description: 'TODO' },
    { url: '/temperatureAPI.html', description: 'Temperature API' },
    { url: '/stopwatch.html', description: 'Stopwatch' },
    { url: '/showPassword.html', description: 'Show Password' },
    { url: '/numberGenerator.html', description: 'Number Generator' },
    { url: '/inputToSpan.html', description: 'Input to Span' },
    { url: '/imageToBase64.html', description: 'Image To Base64' },
    { url: '/generatorQRCode.html', description: 'Generator QRCode' },
    { url: '/generatorCPFCNPJ.html', description: 'CPF and CNPJ Generator' },
    { url: '/currencyQuote.html', description: 'Currency Quote' },
    { url: '/countdown.html', description: 'Countdown' },
    { url: '/copy.html', description: 'Copy' },
    { url: '/characterCounter.html', description: 'Character Counter' },
    { url: '/calculatingLeapYear.html', description: 'Calculate Leap Year' },
    { url: '/calculateTimeStamp.html', description: 'Calculate TimeStamp' },
    { url: '/calculateDays.html', description: 'Calculate Days' },
    { url: '/autoComplete.html', description: 'Auto Complete' },
    { url: '/notificationAndAudio.html', description: 'Notification/Audio' },
    { url: '/URLDecoderAndEncoder.html', description: 'URL Decoder/Encoder' },
    { url: '/sortition.html', description: 'Sortition' },
    { url: '/sortitionNames.html', description: 'Sortition Names' },
    { url: '/headsOrTails.html', description: 'Heads Or Tails' },
    { url: '/typeWriter.html', description: 'TypeWriter' },
    { url: '/tableASCII.html', description: 'Table ASCII' },
    { url: '/calcDuration.html', description: 'Calc Duration' },
];

function loadCard() {
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    cards.reverse().forEach((el) => {
        let card = document.createElement('a');
        card.style.display = 'flex';
        card.style.justifyContent = 'center';
        card.style.alignItems = 'center';
        card.style.width = '200px';
        card.style.height = '200px';
        card.style.margin = '10px';
        card.style.borderRadius = '5px';
        card.style.boxShadow = '0 0 1em #ccc';
        card.textContent = el.description;
        card.href = el.url;
        div.appendChild(card);
    });
    mainEl.appendChild(div);
}

loadCard();
