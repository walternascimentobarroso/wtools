const menuEl = document.querySelector("menu");

const menu = [
    { url: "/index.html", description: "Home" },
    { url: "/about.html", description: "About" },
];

function loadMenu() {
    let ul = document.createElement("ul");
    let newMenu = "";
    menu.forEach((el) => {
        newMenu += `<li><a href='${el.url}'>${el.description}</a></li>`;
    });
    ul.innerHTML = newMenu;
    menuEl.appendChild(ul);
}

loadMenu();
