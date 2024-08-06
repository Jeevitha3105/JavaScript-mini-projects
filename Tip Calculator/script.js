const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', ()=>{
    const amount = parseFloat(document.getElementById('amount').value);
    const tips = parseFloat(document.getElementById('tip').value);

    if(amount == '' || tips == '' || amount <= 0 || tips < 0){
        alert("Please enter the valid values");
    }else{
        //calculation
        let percentage = (tips / 100) * amount;
        let totalAmount = percentage + amount;
        result.textContent = `Total amount including ${tips}% tip: ${totalAmount.toFixed(2)}`;
    }
})
