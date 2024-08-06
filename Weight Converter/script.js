const input = document.getElementById('input');
const option = document.querySelector('.options');
const container = document.querySelector('.main');
const btn = document.getElementById('btn');

let result = document.createElement('p');
result.classList.add('result');

function convert(input,option){

    let inputNumber = parseFloat(input);

    if(inputNumber == '' || inputNumber <= 0 || isNaN(inputNumber)){
        result.textContent = 'Please enter valid values!'
    }

    else if(option == 'pounds'){
        let kg = inputNumber * 0.453592;
        console.log(kg);
            result.textContent = `Your weight in ${option} is: ${kg.toFixed(2)} kg`
    }else{
        let pound = inputNumber / 0.453592;
        console.log(pound);
        result.textContent = `Your weight in ${option} is: ${pound.toFixed(2)} pounds`
    }

    container.appendChild(result);
}

btn.addEventListener('click', ()=>{
    convert(input.value, option.value)
})

