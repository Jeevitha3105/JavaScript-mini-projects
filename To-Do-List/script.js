const input = document.getElementById('input');
const list = document.querySelector('.list-items');
const form = document.getElementById('form');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const item = input.value.trim();
    if(item === ''){
        alert("Cannot add empty item");
    }else{
        addItem(item);
        input.value = '';
    }

    displayItems();

})

const todoList = JSON.parse(localStorage.getItem('list')) || [];

function addItem(input){
    todoList.push(input);
    console.log("item added");
    saveToLocalStorage();
    displayItems();
}

function displayItems(){

    list.innerHTML = ''; // Clear existing list items

    todoList.forEach((item, index) => {
        const newItem = document.createElement('li');
        newItem.classList.add('list-item');

        const itemText = document.createElement('span');
        itemText.textContent = item;
        itemText.classList.add('item-text');
        newItem.appendChild(itemText);

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons');

        const editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit', 'action-icon');
        editIcon.addEventListener('click', ()=>handleEdit(index));
        iconsContainer.appendChild(editIcon);

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash-alt', 'action-icon');
        deleteIcon.addEventListener('click', ()=>deleteItem(index));
        iconsContainer.appendChild(deleteIcon);

        newItem.appendChild(iconsContainer);

        list.appendChild(newItem);
    })
}

function handleEdit(index){
    const currentItem = todoList[index];
    const edit = prompt("Enter a new item", currentItem);
    if(edit !== null && edit.trim() !== ''){
        editItem(index,edit.trim());
    }else{
        alert("Cannot be empty");
    }
}

function editItem(index,edit){
    if(index >=0 && index < todoList.length){
        todoList[index] = edit;
        console.log("item updated");
        saveToLocalStorage();
        displayItems();
    }else{
        console.log("Out of range");
    }
}

function deleteItem(index){
    if(index >=0 && index < todoList.length){
        todoList.splice(index,1);
        console.log("item deleted");
        saveToLocalStorage();
        displayItems();
    }else{
        console.log("Out of range");
    }
}


function saveToLocalStorage(){
    localStorage.setItem("list", JSON.stringify(todoList));
}


displayItems();