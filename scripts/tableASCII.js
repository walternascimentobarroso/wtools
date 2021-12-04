function generateTable(table, data) {
    for (let [key, value] of data.entries()) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(`${key + 32}`);
        cell.appendChild(text);

        cell = row.insertCell();
        text = document.createTextNode(value);
        cell.appendChild(text);
    }
}

function main() {
    outputEl.innerHTML = '';
    let asciiInit = Array.from({ length: 96 }, (v, k) =>
        String.fromCharCode(k + 32)
    );
    generateTable(outputEl, asciiInit);
}

main();
