const time = document.getElementById('time');
const start = document.getElementById('start');
const stops = document.getElementById('stop');
const reset = document.getElementById('reset');

let hours = 0;
let minutes = 0;
let seconds = 0;

let leadingHours = '0';
let leadingMinutes = '0';
let leadingSeconds = '0';

function timer(){
        seconds++;
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
            if(minutes / 60 === 1){
                minutes = 0;
                hours++;
            }
        }

        if(seconds < 10){
            leadingSeconds = "0" + seconds.toString();
        }else{
            leadingSeconds = seconds;
        }
        if(minutes < 10){
            leadingMinutes = "0" + minutes.toString();
        }else{
            leadingMinutes = minutes;
        }
        if(hours < 10){
            leadingHours = "0" + hours.toString();
        }else{
            leadingHours = hours;
        }

    time.textContent = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}`;
}

let timerInterval;
start.addEventListener('click', ()=>{
    timerInterval = window.setInterval(timer,1000);
})

stops.addEventListener('click', ()=>{
    window.clearInterval(timerInterval);
})

reset.addEventListener('click', ()=>{
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.textContent = "00:00:00";
})