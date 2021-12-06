'use strict';

const KEY_TODO = 'WTODO';
let items = JSON.parse(localStorage.getItem(KEY_TODO)) || [];
listAll();

function listAll() {
    todoEl.innerHTML = '';
    items.forEach((value) => addItem(value));
}

function edit(e) {
    let span = e.previousSibling;
    let input = document.createElement('input');
    input.value = span.innerText;
    span.replaceWith(input);

    e.replaceWith(makeButton('💾', 'save(this)'));
}

function save(e) {
    let input = e.previousSibling;

    updateStorage(e, (index) => {
        items[index] = { id: randomId(), name: input.value };
    });

    let span = document.createElement('span');
    span.innerText = input.value;
    input.replaceWith(span);

    e.replaceWith(makeButton('✏️', 'edit(this)'));
}

function makeButton(text, onclick) {
    let button = document.createElement('button');
    button.textContent = text;
    button.setAttribute('onclick', onclick);

    return button;
}

function remove(e) {
    if (window.confirm('Excluir?')) {
        updateStorage(e, (index) => items.splice(index, 1));
    }
}

function updateStorage(e, action) {
    let id = e.parentNode.dataset.id;
    items.some((value, index) => {
        if (value.id == id) {
            action(index);
            create(KEY_TODO, JSON.stringify(items));
            return true;
        }
    });
    listAll();
}

function checked({ target }) {
    if (target.tagName === 'SPAN') {
        target.style.textDecoration = !target.style.textDecoration
            ? 'line-through'
            : '';
    }
}

const randomId = () => Math.floor(Math.random() * 9999) + 10;

function add() {
    let input_value = taskEl.value;
    taskEl.value = '';
    let item = { id: randomId(), name: input_value };
    items.push(item);
    create(KEY_TODO, JSON.stringify(items));
    addItem(item);
}

function addItem({ id, name }) {
    let li = document.createElement('LI');
    let span = document.createElement('SPAN');

    span.textContent = name;

    li.setAttribute('data-id', id);
    li.appendChild(span);
    li.appendChild(makeButton('✏️', 'edit(this)'));
    li.appendChild(makeButton('🗑️', 'remove(this)'));

    todoEl.appendChild(li);
}

function removeAll() {
    localStorage.clear();
    items = [];
    listAll();
}

const create = (key, value) => localStorage.setItem(key, value);

todoEl.addEventListener('click', checked);
addEl.addEventListener('click', add);
clearEl.addEventListener('click', removeAll);
