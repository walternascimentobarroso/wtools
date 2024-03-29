'use strict';

generateEl.addEventListener('click', calcularBissexto);

const day_array = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo',
];

const calcular_bissexto = (ano) =>
    (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0
        ? 'É bissexto'
        : 'Não é bissexto';

function calcularBissexto() {
    let date_full = new Date(dateEl.value);
    let date_year = date_full.getFullYear();

    typeEl.innerText = calcular_bissexto(date_year);
    dayEl.innerText = day_array[date_full.getDay()];
}
