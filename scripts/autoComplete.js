(function () {
    'use strict';
    const destination = ['Italy', 'Spain', 'Portugal', 'Brazil'];

    inputEl.addEventListener('input', changeAutoComplete);
    suggestionsEl.addEventListener('click', selectItem);

    function changeAutoComplete({ target }) {
        let data = target.value;
        suggestionsEl.innerHTML = ``;
        if (data.length) {
            let autoCompleteValues = autoComplete(data, destination);
            autoCompleteValues.forEach((value) => {
                addItem(value);
            });
        }
    }

    function autoComplete(inputValue, destination) {
        return destination.filter((value) =>
            value.toLowerCase().includes(inputValue.toLowerCase())
        );
    }

    const addItem = (value) => (suggestionsEl.innerHTML += `<li>${value}</li>`);

    function selectItem({ target }) {
        if (target.tagName === 'LI') {
            inputEl.value = target.textContent;
            suggestionsEl.innerHTML = ``;
        }
    }
})();
