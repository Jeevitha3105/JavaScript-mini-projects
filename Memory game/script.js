document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [
        {
            name : 'fries',
            img : './images/frenchfries.png'
        },
        {
            name : 'pizza',
            img : './images/pizza.png'
        },
        {
            name : 'chicken',
            img : './images/friedChicken.png'
        },
        {
            name : 'fries',
            img : './images/frenchfries.png'
        },
        {
            name : 'milkshake',
            img : './images/milkshake.png'
        },
        {
            name : 'icecream',
            img : './images/icecream.png'
        },
        {
            name : 'hamburger',
            img : './images/hamburger.png'
        },
        {
            name : 'chicken',
            img : './images/friedChicken.png'
        },
        {
            name : 'hamburger',
            img : './images/hamburger.png'
        },
        {
            name : 'icecream',
            img : './images/icecream.png'
        },
        {
            name : 'milkshake',
            img : './images/milkshake.png'
        },
        {
            name : 'pizza',
            img : './images/pizza.png'
        },

    ]

    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    let resultDisplay = document.getElementById('result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    
    //create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', './images/placeholder.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches
    function checkForMatch(){
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert("You found a match!");
            cards[optionOneId].setAttribute('src', './images/white.png');
            cards[optionTwoId].setAttribute('src', './images/white.png');
            cardsWon.push(cardsChosen.slice());
        }else{
            cards[optionOneId].setAttribute('src', './images/placeholder.jpg');
            cards[optionTwoId].setAttribute('src', './images/placeholder.jpg');
            alert("Sorry, try again!");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! you found them all';
        }
    }

    // flip your card
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})