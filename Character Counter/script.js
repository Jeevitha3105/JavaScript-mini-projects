const textarea = document.getElementById('textarea');
const total = document.getElementById('total');
const remaining = document.getElementById('remaining');

textarea.addEventListener('keyup', ()=>{
    count();
})

count();

function count(){
    total.textContent = textarea.value.length;
    remaining.textContent = textarea.getAttribute("maxlength") - textarea.value.length;
}

