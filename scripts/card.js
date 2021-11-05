const mainEl = document.querySelector("main");

const cards = [
    { url: "/index.html", description: "Home" },
    { url: "/about.html", description: "About" },
];

function loadCard() {
    let div = document.createElement("div");
    div.style.display = "flex";
    cards.forEach((el) => {
        let card = document.createElement("a");
        card.style.display = "flex";
        card.style.justifyContent = "center";
        card.style.alignItems = "center";
        card.style.width = "100px";
        card.style.height = "100px";
        card.style.margin = "10px";
        card.style.borderRadius = "5px";
        card.style.boxShadow = "0 0 1em #ccc";
        card.textContent = el.description;
        card.href = el.url;
        div.appendChild(card);
    });
    mainEl.appendChild(div);
}

loadCard();
