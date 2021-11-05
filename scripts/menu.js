const menuEl = document.querySelector("#menu");

const menu = [
    { url: "/", description: "Home" },
    { url: "/about.html", description: "About" },
];

function loadMenu() {
    let newMenu = "";
    menu.forEach((el) => {
        newMenu += `<li><a href='${el.url}'>${el.description}</a></li>`;
    });
    menuEl.innerHTML = newMenu;
}

loadMenu();
