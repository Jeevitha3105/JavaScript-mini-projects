window.addEventListener('DOMContentLoaded', () => {
    const displayNum = document.querySelectorAll('.num');
    let interval = 1000;
    
    displayNum.forEach((num) => {
    let startVal = 0;
    let endVal = parseInt(num.getAttribute('data-val'));
    let duration = Math.floor(interval / endVal);
    
    let counter = setInterval(function(){
        startVal += 1;
        num.textContent = startVal;
        if(startVal == endVal){
            clearInterval(counter);
        }
    }, duration);
    
    })
})