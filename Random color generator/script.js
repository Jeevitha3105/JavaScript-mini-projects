const container = document.querySelector('.container');

//color creation
function colors(){
    const hex = "0123456789abcdef";
    let color = "#";

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

//card creation
for(let i=0; i < 20; i++){
    let card = document.createElement('div');
    card.classList.add('card');
    card.textContent = i;
    container.appendChild(card);
}

const cards = document.querySelectorAll('.card');


// display colors
function generateColor(){
    cards.forEach((card) => {
        const randomColor = colors();
        card.style.backgroundColor = randomColor;
        card.textContent = randomColor;
    })
}

generateColor();