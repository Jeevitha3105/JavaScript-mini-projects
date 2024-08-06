const input = document.getElementById('input');
const btn = document.getElementById('btn');
const container = document.querySelector('.image-container');
const showMore = document.getElementById('show-more');

const API_KEY = 'p9BfkiGAR74MyuuA1kIL5yQtXRNlKv_5ESb6XvnWEUU';

let page = 1;

async function getImages(){
    let query = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${API_KEY}`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    results.map((result)=>{
        const div = document.createElement('div');
        div.classList.add('img');
        const img = document.createElement('img');
        img.src = result.urls.small;

        div.appendChild(img);

        container.appendChild(div);
    })
    showMore.style.display = "block";

}

btn.addEventListener('click', ()=>{
    getImages();
})

showMore.addEventListener('click', ()=>{
    page++;
    getImages();
})