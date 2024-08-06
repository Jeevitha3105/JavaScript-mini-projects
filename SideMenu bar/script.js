const menuBtn = document.querySelector('.bar');
const closeBtn = document.querySelector('.close');
const sideBar = document.querySelector('.side-bar');

menuBtn.addEventListener('click', ()=>{
    sideBar.classList.add('show');
})

closeBtn.addEventListener('click', ()=>{
    sideBar.classList.remove('show');
})