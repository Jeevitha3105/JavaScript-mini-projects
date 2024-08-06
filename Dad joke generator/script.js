const result = document.getElementById('result');
const btn = document.getElementById('btn');

const api = 'https://icanhazdadjoke.com/';

async function getdadJoke(){
    try{
        const response = await fetch(api, {
            
        headers : {
           'accept' :  'application/json'
        },
    })

    const data = await response.json();

    result.textContent = data.joke;
}catch(err){
    console.log(err);
    result.textContent = "Error occured, try again later"
}
}

getdadJoke();

btn.addEventListener('click', ()=>{
    getdadJoke();
})