const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function setTime(){
    const now = new Date();

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSeconds = now.getSeconds();

    const hourDegree = (currentHour / 12) * 360;
    const minuteDegree = (currentMinute / 60) * 360;
    const secondDegree = (currentSeconds / 60) * 360;

    hour.style.transform = `rotate(${hourDegree}deg)`;
    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
}

setInterval(setTime, 1000);