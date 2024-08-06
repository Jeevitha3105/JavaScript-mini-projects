const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const months = document.getElementById('months');
const result = document.getElementById('result');

function calculate(){
    let amt = Number(amount.value);
    let interestRate = Number(interest.value) / 100;
    let monthsToPay = Number(months.value);

    let monthlyInterest = interestRate / 12;
    let n = monthsToPay;

    let monthlyPayment = (amt * monthlyInterest * Math.pow(1 + monthlyInterest, n)) /
    (Math.pow(1 + monthlyInterest, n) - 1);

    result.textContent = monthlyPayment.toFixed(2);
}


document.getElementById('btn').addEventListener('click', ()=>{
    if(amount.value === '' || interest.value === '' || months.value === ''){
        alert("Please enter all the values");
    }
    calculate();
})
