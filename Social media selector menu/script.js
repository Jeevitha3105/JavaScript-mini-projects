const input = document.querySelector('.input');
const socialMedia = document.querySelectorAll('.box');
const list = document.querySelector('.list');
const arrow = document.querySelector('.arrow');

input.addEventListener('click', ()=>{
    list.classList.toggle('show');
    arrow.classList.toggle('show');
})

socialMedia.forEach((button)=>{
    button.addEventListener('click', ()=>{
        input.innerHTML = button.innerHTML;
        list.classList.remove('show');
        arrow.classList.remove('show');
    })
})