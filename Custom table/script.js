const nameInput = document.getElementById('nameInput');
const catInput = document.getElementById('catInput');
const yearInput = document.getElementById('yearInput');
const table = document.getElementById('table');

let entries = JSON.parse(localStorage.getItem('entries')) || [];

function submitItem(){
    let obj = {
        id : Date.now(),
        name : nameInput.value,
        category : catInput.value,
        year : yearInput.value
    }

    entries.push(obj);
    saveToLocalStorage();

    nameInput.value = '';
    catInput.value = '';
    yearInput.value = '';
    console.log(entries);
    display();
}

const tableHeaderHTML = table.querySelector('tr').outerHTML;

function display(){
    table.innerHTML = tableHeaderHTML;
    entries.forEach((item)=>{
        let row = document.createElement('tr');
        row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>${item.year}</td>
                    <td onclick = "editItem(${item.id})"><i class="fas fa-edit" title="Edit"></i></td>
                    <td onclick = "deleteItem(${item.id})"><i class="fas fa-trash" title="Delete"></i></td>
        `
        table.appendChild(row);
    })
}

let editIndex = null;

function editItem(id){
    let item = entries.find((item)=> item.id === id)
    console.log(item);

    if(item){
        nameInput.value = item.name;
        catInput.value = item.category;
        yearInput.value = item.year;

        document.getElementById('editItem').style.display = 'block';
        document.getElementById('submitItem').style.display = 'none';

        editIndex = entries.indexOf(item);
    }
}

function updateItem(){
    if(editIndex !== null){
        entries[editIndex] = {
            id : entries[editIndex].id,
            name : nameInput.value,
            category: catInput.value,
            year : yearInput.value
        }

        nameInput.value = '';
        catInput.value = '';
        yearInput.value = '';

        editIndex = null; 

        document.getElementById('editItem').style.display = 'none';
        document.getElementById('submitItem').style.display = 'block';

        console.log(entries);
        saveToLocalStorage();
        display();
    }
}

function deleteItem(id){
    entries = entries.filter((item)=> item.id !== id);
    console.log(entries);
    saveToLocalStorage();
    display();
}


function saveToLocalStorage(){
    localStorage.setItem('entries', JSON.stringify(entries));
}


display();


//search
function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const rows = table.querySelectorAll('tr:not(.titles)');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const isMatch = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchInput));
        row.style.display = isMatch ? '' : 'none';
    });
}


//sort

let currentSort = {
    column: '',
    direction: 'ascending'
};


function sortItems(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'ascending' ? 'descending' : 'ascending';
    } else {
        currentSort.column = column;
        currentSort.direction = 'ascending';
    }

    entries.sort((a, b) => {
        if (a[column] < b[column]) {
            return currentSort.direction === 'ascending' ? -1 : 1;
        }
        if (a[column] > b[column]) {
            return currentSort.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    console.log(`Sorted by ${column} in ${currentSort.direction} order`);
    console.log(entries);

    display();
}