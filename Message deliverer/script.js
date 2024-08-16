const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('para');
const warning = document.querySelector('h1');

function warningMsg(){
    warning.style.display = 'none';
}

button.addEventListener('click', ()=>{
    if(input.value == ''){
        warning.style.display = 'block';
        output.textContent = '';
        let time = setTimeout(warningMsg,2000);
    }else{
        output.textContent = input.value;
        input.value = '';
    }

})
