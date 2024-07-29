const from = document.getElementById('from');
const to = document.getElementById('to');
const button = document.getElementById('convert-btn');
const result = document.getElementById('result');

fetch('https://api.frankfurter.app/currencies')
.then((res)=>res.json())
.then((data)=> dropdown(data))
.catch((err)=>console.log(err));

function dropdown(data){
    let entries = Object.entries(data);
    for(let i=0; i<entries.length; i++){
        let option = `<option value="${entries[i][0]}">${entries[i][0]}<option>`;
        from.innerHTML += option;
        to.innerHTML += option;
    }
}

button.addEventListener('click',()=>{
    let amount = document.getElementById('input-box').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    if(from == to){
        alert("Please select different currencies");
    }else if(from == '' || to == ''){
        alert("Please select currencies");
    }
    else{
        convert(amount,from,to);
    }
})

function convert(amount,from,to){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
  .then(res => res.json())
  .then((data) => {  
     result.textContent = Object.values(data.rates)[0];
  }).catch((err)=>console.log(err));
}
