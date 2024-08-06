const birthDate = document.getElementById('dateOfBirth');
const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', ()=>{
    let dateOfBirth = birthDate.value;
    if(dateOfBirth == ''){
        alert("Please enter the date");
    }else{
        let age = getAge(dateOfBirth);
        result.textContent = age;
    }
})

function getAge(dateOfBirth){
    let birthDate = new Date(dateOfBirth);
    let currentDate = new Date();
    let currentAge = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();

    if(month < 0 || (month == 0 && currentDate.getDate() < birthDate.getDate())){
        currentAge--;
    }
    
    return currentAge;
}

    
