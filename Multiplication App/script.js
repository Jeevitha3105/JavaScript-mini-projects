const score = document.getElementById('score');
const question = document.getElementById('question');
const form = document.getElementById('form');
const input = document.getElementById('input');

let points = JSON.parse(localStorage.getItem('score'));

if(!points){
    points = 0;
}

let num1, num2, ans;

function generateQuestion() {
    num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    ans = num1 * num2;
    question.textContent = `What is ${num1} multiplied by ${num2}?`;
}

function updateScore() {
    score.textContent = `Score: ${points}`;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userAnswer = parseInt(input.value);

    if (userAnswer === ans) {
        points++;
        updateLocalStorage()
        console.log("Answer is correct");
    } else {
        points--;
        updateLocalStorage()
        console.log("Answer is incorrect");
    }

    updateScore();
    generateQuestion();
    input.value = '';
});


generateQuestion();
updateScore();


function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(points));
}
