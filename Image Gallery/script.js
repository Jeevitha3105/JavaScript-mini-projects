const input = document.getElementById('input');
const button = document.getElementById('btn');
const container = document.querySelector('.image-container');
const imgContainer = document.querySelector('.image-gallery');
const API_KEY = 'J3cpZpE4VPTmiDgfZojcCICyVy5bz6vvVdIEklA7b2uXb02513mp40bg';


async function getImage() {
    let inputValue = parseInt(input.value);

    if (inputValue < 1 || inputValue > 10) {
        alert("Please enter a value between 1 and 10.");
        return;
    }

    try {
        const response = await fetch(`https://api.pexels.com/v1/curated?per_page=${inputValue}`, {
            headers: {
                Authorization: API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        console.log(data);
        displayImages(data.photos);

    } catch (error) {
        console.error('Error fetching images:', error);
    }
}


function displayImages(photos) {
    imgContainer.innerHTML = ''; // Clear previous images

    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.src.original; 
        imgElement.alt = `Photo by ${photo.photographer}`;
        imgElement.title = `Photo by ${photo.photographer}`;
        imgContainer.appendChild(imgElement);
    });

    container.style.display = "block";
}


button.addEventListener('click', ()=>{
    getImage();
})