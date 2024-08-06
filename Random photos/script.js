const container = document.querySelector('.container');
const button = document.getElementById('btn');

button.addEventListener('click' , () => {
    let noOfImgs = 10;
    for(let i=0; i<=noOfImgs; i++){
        const img = document.createElement('img');
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
        container.appendChild(img);
    }
})