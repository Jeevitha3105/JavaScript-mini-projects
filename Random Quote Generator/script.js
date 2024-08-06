const quote = document.querySelector('.quote');
const author = document.querySelector('.person');
const button = document.getElementById('new-quote');

button.addEventListener('click', ()=>{
    getQuotes();
})

function displayQuotes(data){
    try{
    let index = Math.floor(Math.random() * data.length);
    quote.textContent = `"${data[index].text}"`;
    author.textContent = data[index].author;
    }
    catch{
        quote.textContent = "An error happened, try again later";
        author.textContent = "An error happened";
    }
}

async function getQuotes(){
    await fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        displayQuotes(data);
    });
}
