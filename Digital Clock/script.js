const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function setTime(){
    const now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSeconds = now.getSeconds();

    let ampm = "AM"

    if(currentHour > 12){
        currentHour = currentHour - 12;
        ampm = "PM";
    }

    currentHour = currentHour < 10 ? "0" + currentHour : currentHour;
    currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;
    currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

    hour.textContent = currentHour;
    minute.textContent = currentMinute;
    seconds.textContent = currentSeconds;
    ampmEl.textContent = ampm;

    setTimeout(()=>{                        // Instead of using setTimeout() recursively, you could use setInterval(setTime, 1000).
        setTime()
    }, 1000);
}

setTime();

// setInterval(setTime,1000);           