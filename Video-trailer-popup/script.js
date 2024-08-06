const btn = document.getElementById('btn');
const container = document.querySelector('.video-div');
const closeBtn = document.querySelector('.close');
const video = document.querySelector('.video');

btn.addEventListener('click', ()=>{
    container.classList.add('active');
})

closeBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
    video.pause();
    video.currentTime = 0;
})