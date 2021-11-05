const footerEl = document.querySelector("footer");

function loadFooter() {
    const year = new Date().getFullYear();
    const p = document.createElement("p");
    const link = document.createElement("a");
    link.href = "https://walternascimentobarroso.github.io/";
    link.target = "_blank";
    link.textContent = "Walter Nascimento Barroso";


    p.innerText = `© ${year} - `;
    p.appendChild(link);
    footerEl.appendChild(p);
}

loadFooter();
