const result = document.getElementById('result');
const condition = document.getElementById('condition');


function calculateBmi(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if(height == '' || weight == ''){
        alert("Please enter all the values");
    }else{
        let bmi = weight / Math.pow((height / 100), 2);
        result.value = bmi.toFixed(2);

        if(bmi < 18.5){
            condition.textContent = "Underweight";
        }else if(bmi >= 18.5 && bmi < 25){
            condition.textContent = "Normal Weight";
        }
        else if(bmi >= 25 && bmi < 30){
            condition.textContent = "Overweight";
        }
        else if(bmi >= 30){
            condition.textContent = "Obesity";
        }
    }
}

document.getElementById('btn').addEventListener('click', ()=>{
    calculateBmi();
})


