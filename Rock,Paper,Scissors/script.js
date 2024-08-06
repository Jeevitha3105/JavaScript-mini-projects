const buttons = document.querySelectorAll('.buttons button');
const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
const result = document.getElementById('result');

    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            let choice = button.id
           getResults(choice, computerPlay());
        })
    })

function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() * choices.length);
    let choice = choices[index];
    return choice;
}

let user = 0;
let computer = 0;

function getResults(userChoice, computerChoice){
    if(userChoice === computerChoice){
        console.log("tie");
        result.textContent = "It's a tie!";
    }else if(userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissors" && computerChoice === "paper")
            {
                user++;
                userScore.textContent = user;
                result.textContent = `You win! ${userChoice} beats ${computerChoice}`;
            }
    else{
        computer++;
        computerScore.textContent = computer;
        result.textContent = `Computer wins! ${computerChoice} beats ${userChoice}`;
    }
}