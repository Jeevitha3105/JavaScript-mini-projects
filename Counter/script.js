const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const reset = document.getElementById('reset');
const result = document.getElementById('result');

let initial = 0;
result.textContent = initial;

add.addEventListener('click', ()=>{
    initial++;
    result.textContent = initial;

    if(initial > 0){
        result.style.color = "green";
    }else if(initial < 0){
        result.style.color = "red";
    }else{
        result.style.color = "black";
    }

})
subtract.addEventListener('click', ()=>{
    initial--;
    result.textContent = initial;

    if(initial > 0){
        result.style.color = "green";
    }else if(initial < 0){
        result.style.color = "red";
    }else{
        result.style.color = "black";
    }


})
reset.addEventListener('click', ()=>{
    initial = 0;
    result.textContent = initial;
    result.style.color = "black";
})