const btn = document.getElementById('btn');
const result = document.getElementById('result');

let random = Math.floor(Math.random() * 10) + 1;

function guessing(input){
    if(input == random){
        result.textContent = 'Congratulations! You guessed it correctly'
    }else if(input > random){
        result.textContent = 'Oops! Try a smaller number'
    }else{
        result.textContent = 'Oops! Try a larger number'
    }
}

btn.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    if(input == 0 || input > 10){
        alert("Please enter a number between 1 to 10")
    }else{
        guessing(input);
    }
    
});