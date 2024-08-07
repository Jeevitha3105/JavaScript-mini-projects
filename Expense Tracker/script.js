const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const form = document.getElementById('form');
const amount = document.getElementById('amount');
const details = document.querySelector('.right');


document.addEventListener('DOMContentLoaded', loadEntries);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addEntry();
})


let totalIncome = 0;
let totalExpense = 0;

function addEntry(){
    const entryType = document.getElementById('entry-type').value;
    const description = document.getElementById('description').value;
    let entryAmount = parseFloat(amount.value);

    if (isNaN(entryAmount) || entryAmount <= 0) {
        alert('Please enter a valid amount greater than 0.');
        return;
    }

    if(entryType == 'income'){
        totalIncome += entryAmount;
    }else{
        totalExpense += entryAmount;
    }

    update();

    const entry = {
        description: description,
        amount: entryAmount,
        type: entryType
    };

    saveEntry(entry);               //save to localstorage


    const div = document.createElement('div');
    div.innerHTML = `      
                <p>${description}</p>
                <p style="color : ${entryType == "income" ? 'green' : 'red'}"> ${entryType == "income" ? '+' : '-'}${entryAmount.toFixed(2)} </p>
                <i class="fas fa-trash"></i>`

    div.querySelector('.fa-trash').addEventListener('click', ()=>{
        removeEntry(div,entryAmount,entryType);
    })
    details.appendChild(div);

    form.reset();

}


function update(){
    income.textContent = totalIncome.toFixed(2);
    expense.textContent = totalExpense.toFixed(2);
    balance.textContent = (totalIncome - totalExpense).toFixed(2);
}

function saveEntry(entry) {
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));
}


function removeEntry(div,entryAmount,entryType){
    if(entryType == 'income'){
        totalIncome -= entryAmount;
    }else{
        totalExpense -= entryAmount;
    }

    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const updatedEntries = entries.filter(entry => 
        !(entry.description === div.querySelector('p').textContent && 
          parseFloat(entry.amount) === entryAmount &&
          entry.type === entryType)
    );

    localStorage.setItem('entries', JSON.stringify(updatedEntries));

    details.removeChild(div);
    update();
}



function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.forEach(entry => {
        if (entry.type === 'income') {
            totalIncome += entry.amount;
        } else {
            totalExpense += entry.amount;
        }

        const div = document.createElement('div');
        div.classList.add('entry-item');
        div.innerHTML = `
            <p>${entry.description}</p>
            <p style="color: ${entry.type === 'income' ? 'green' : 'red'}">
                ${entry.type === 'income' ? '+' : '-'}${entry.amount.toFixed(2)}
            </p>
            <i class="fas fa-trash" style="cursor: pointer;" title="Delete"></i>
        `;

        div.querySelector('.fa-trash').addEventListener('click', () => {
            removeEntry(div, entry.amount, entry.type);
        });

        details.appendChild(div);
    });

    update();
}