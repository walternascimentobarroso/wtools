const timestampEl = document.getElementById("timestamp");
const dateEl = document.getElementById("date");

function dateToTimestamp() {
    let date_ini = document.form_main.date_ini.value;
    let hour_ini = document.form_main.hour_ini.value;
    let timestamp = new Date(`${date_ini} ${hour_ini}`).getTime();
    timestampEl.innerText = timestamp;
}

function timestampToDate() {
    let timestamp_end = document.form_main.timestamp_end.value;
    let date_ini = new Date(parseInt(timestamp_end));
    dateEl.innerText = date_ini.toLocaleString("pt-BR");
}
