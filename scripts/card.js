const mainEl = document.querySelector('main');

const cards = [
    { url: '/whatsapp.html', description: 'Whatsapp' },
    { url: '/characterCounter.html', description: 'Character Counter' },
    { url: '/calculateTimeStamp.html', description: 'Calculate TimeStamp' },
    { url: '/calculateDays.html', description: 'Calculate Days' },
    { url: '/calculatingLeapYear.html', description: 'Calculate Leap Year' },
    { url: '/todo.html', description: 'TODO' },
    { url: '/countdown.html', description: 'Countdown' },
    { url: '/transformingLetters.html', description: 'Transforming Letters' },
    { url: '/copy.html', description: 'Copy' },
    { url: '/stopwatch.html', description: 'Stopwatch' },
    { url: '/currencyQuote.html', description: 'Currency Quote ' },
    { url: '/generatorCPFCNPJ.html', description: 'CPF and CNPJ Generator' },
    { url: '/imageToBase64.html', description: 'Image To Base64' },
    { url: '/showPassword.html', description: 'Show Password' },
    { url: '/inputToSpan.html', description: 'Input to Span' },
];

function loadCard() {
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    cards.forEach((el) => {
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
