let all_questions = [
    {
        question_string: 'What is 2+2?',
        choices: {
            correct: '4',
            wrong: ['2', '5', '9'],
        },
    },
    {
        question_string: 'What is 2/2?',
        choices: {
            correct: '1',
            wrong: ['6', '7', '4'],
        },
    },
    {
        question_string: 'What is 2*2?',
        choices: {
            correct: '4',
            wrong: ['2', '8', '16'],
        },
    },
    {
        question_string: 'What is 2-2?',
        choices: {
            correct: '0',
            wrong: ['4', '1', '3'],
        },
    },
];

let total_questions = all_questions.length;
let all_point = Array(total_questions).fill(0);

nextEl.addEventListener('click', nextQuestion);
prevEl.addEventListener('click', prevQuestion);
submitEl.addEventListener('click', submitQuestion);

let init_question = 0;
loadQuiz(init_question);

function submitQuestion() {
    let item_checked = document.querySelector('input[name="answers"]:checked');
    let item_checked_value = item_checked ? item_checked.value : '';
    savePoint(init_question, item_checked_value);
    var total = all_point.reduce((t, n) => t + n, 0);
    outputEl.innerHTML = `
        <h1>You made ${total}/${total_questions} points</h1>
        `;
}

function nextQuestion() {
    let item_checked = document.querySelector('input[name="answers"]:checked');
    let item_checked_value = item_checked ? item_checked.value : '';
    savePoint(init_question, item_checked_value);
    init_question++;
    prevEl.removeAttribute('disabled');
    if (init_question >= total_questions - 1) {
        nextEl.setAttribute('disabled', 'disabled');
        submitEl.removeAttribute('disabled');
    }
    loadQuiz(init_question);
}

function prevQuestion() {
    init_question--;
    nextEl.removeAttribute('disabled');
    submitEl.setAttribute('disabled', 'disabled');
    if (init_question <= 0) {
        prevEl.setAttribute('disabled', 'disabled');
    }
    loadQuiz(init_question);
}

function loadQuiz(index) {
    let answers = [];
    let answers_wrong = all_questions[index].choices.wrong;
    let answers_correct = all_questions[index].choices.correct;
    answers = answers.concat(answers_wrong);
    answers.push(answers_correct);
    answers.sort();
    answers_html = '';
    for (let j = 0; j < answers.length; j++) {
        answers_html += `<li>
            <input type="radio" name="answers" value="${answers[j]}" id="${answers[j]}" />
            <label for="${answers[j]}">${answers[j]}</label>
            </li>`;
    }
    quizEl.innerHTML = `<h3>My quizEl</h3>`;
    quizEl.innerHTML += `<h4>${all_questions[index].question_string}</h4>`;
    quizEl.innerHTML += `<ul>${answers_html}</ul>`;
}

function savePoint(index, item_checked) {
    let result = all_questions[index].choices.correct == item_checked;
    all_point[index] = result ? 1 : 0;
}
