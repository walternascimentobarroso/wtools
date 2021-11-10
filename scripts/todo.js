const liEl = document.querySelectorAll('#todo li');
const todoEl = document.querySelector('#todo');

function createCloseButton(li) {
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = () => (span.parentElement.style.display = 'none');
}

function checked({ target }) {
    if (target.tagName === 'LI') {
        target.style.textDecoration = !target.style.textDecoration
            ? 'line-through'
            : '';
    }
}

function add() {
    let li = document.createElement('LI');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);

    li.appendChild(input_text);
    todoEl.appendChild(li);
    document.form_main.task.value = '';

    createCloseButton(li);
}

liEl.forEach(createCloseButton);
todoEl.addEventListener('click', checked);
