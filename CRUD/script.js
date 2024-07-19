const form = document.getElementById('form');
const list = document.getElementById('detailsList');

loadFromLocalStorage();

form.addEventListener('submit', handleSubmit);

// submit
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;

    const newData = {
        name: name,
        email: email,
        contact: contact,
        address: address
    };

    const mode = form.getAttribute('data-mode');

    if (mode === 'edit') {
        const index = parseInt(form.getAttribute('data-index'), 10);
        const rowToUpdate = list.querySelector(`tr:nth-child(${index + 1})`);

        // Update row in UI
        rowToUpdate.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${contact}</td>
            <td>${address}</td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        // Update data in localStorage
        updateToLocalStorage(index, newData);

        // Reset form and attributes
        form.reset();
        form.removeAttribute('data-mode');
        form.removeAttribute('data-index');
    } else {
        saveToLocalStorage(newData);

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${contact}</td>
            <td>${address}</td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        list.appendChild(newRow);

        form.reset();
    }
}

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        const index = Array.from(list.children).indexOf(row);
        row.remove();
        deleteFromLocalStorage(index);
    } else if (event.target.classList.contains('edit-btn')) {
        const row = event.target.closest('tr');
        const index = Array.from(list.children).indexOf(row);
        const data = JSON.parse(localStorage.getItem('formData'))[index];
        handleEdit(data, index);
    }
});
//save
function saveToLocalStorage(newData) {
    const dataList = JSON.parse(localStorage.getItem('formData')) || [];
    dataList.push(newData);
    localStorage.setItem('formData', JSON.stringify(dataList));
}
//load
function loadFromLocalStorage() {
    const dataList = JSON.parse(localStorage.getItem('formData')) || [];
    dataList.forEach((data, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.contact}</td>
            <td>${data.address}</td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        list.appendChild(newRow);
    });
}
//edit
function handleEdit(data, index) {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('contact').value = data.contact;
    document.getElementById('address').value = data.address;

    // Set form attributes for edit mode
    form.setAttribute('data-mode', 'edit');
    form.setAttribute('data-index', index);
}
//update
function updateToLocalStorage(index, newData) {
    let dataList = JSON.parse(localStorage.getItem('formData')) || [];
    dataList[index] = newData; // Update data at specific index
    localStorage.setItem('formData', JSON.stringify(dataList));
}
//delete
function deleteFromLocalStorage(index) {
    let dataList = JSON.parse(localStorage.getItem('formData')) || [];
    dataList.splice(index, 1); // Remove data at specific index
    localStorage.setItem('formData', JSON.stringify(dataList));
}
