const search = document.getElementById('search-input');
const btn = document.getElementById('btn');

btn.addEventListener('click', async ()=>{
    const query = search.value.trim();
    if(query){
        try{
            const book = await getBook(query);
            search.value = '';
            displayBooks(book);
        }catch(err){
            console.log("Error fetching data", err);
        }
    }else{
        alert("Please enter the search query");
    }
})


async function getBook(query){
    try{
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);
        return data.items;
    }catch(err){
        console.log("Error fetching books", err);
        return [];
    }

}

function displayBooks(books){
    const container = document.getElementById('main-container');
    container.innerHTML = '';

    books.forEach((book)=>{
        let card = document.createElement('div');
        card.classList.add('card');

        let authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown';
                // Truncate title if it's too long
        let title = book.volumeInfo.title.length > 20 
                ? book.volumeInfo.title.slice(0, 20) + '...' 
                : book.volumeInfo.title;

        card.innerHTML = `
            <img src="${book.volumeInfo.imageLinks?.thumbnail || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Georgia_404.svg/1125px-Georgia_404.svg.png'}" alt="${book.volumeInfo.title || 'Book Cover'}"/>
            <h2>${title || 'Unknown'}</h2>
            <p>Author : <span>${authors}</span></p>
            <p>Published by : <span>${book.volumeInfo.publisher || 'Unknown' }</span></p>
            <a href="${book.volumeInfo.infoLink}" target="_blank"><button>View Book</button></a>
        ` 
        container.appendChild(card);
    })
}
