const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btn');
const image = ["img-1.jpg","img-2.jpeg","img-3.jpeg","img-4.jpeg","img-5.jpeg"];

let index = 0;

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        if(button.classList.contains("btn-left")){
            index--;
            if(index < 0){
                index = image.length-1;
            }
            container.style.background = `url("./images/${image[index]}") center/cover fixed no-repeat`;
        }else{
            index++;
            if(index == image.length){
                index = 0;
            }
            container.style.background = `url("./images/${image[index]}") center/cover fixed no-repeat`;
        }
    })

    
})