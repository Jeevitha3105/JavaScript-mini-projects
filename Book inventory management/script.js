// Define bookDetails and books array
const bookDetails = {
    title: "",
    author: "",
    year: "",
    isbn: ""
};

let books = [];

// Function to add a new book
function addBook(title, author, year, isbn) {
    let newBook = {
        title: title,
        author: author,
        year: year,
        isbn: isbn
    };
    books.push(newBook);
    updateLocalStorage();
    displayBooks(); // Refresh books display after adding
}

// Function to display all books in the UI
function displayBooks() {
    let booksList = document.getElementById("booksList");
    booksList.innerHTML = ""; // Clear previous content

    books.forEach((book) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.isbn}</td>
            <td>
                <button class="editBtn" data-isbn="${book.isbn}">Edit</button>
                <button class="deleteBtn" data-isbn="${book.isbn}">Delete</button>
            </td>
        `;
        booksList.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    let editButtons = document.getElementsByClassName("editBtn");
    for (let button of editButtons) {
        button.addEventListener("click", function(event) {
            let isbn = event.target.getAttribute("data-isbn");
            let bookToEdit = books.find((book) => book.isbn === isbn);
            // Populate edit form with existing book data
            document.getElementById("updateIsbn").value = bookToEdit.isbn;
            document.getElementById("updateTitle").value = bookToEdit.title;
            document.getElementById("updateAuthor").value = bookToEdit.author;
            document.getElementById("updateYear").value = bookToEdit.year;
        });
    }

    let deleteButtons = document.getElementsByClassName("deleteBtn");
    for (let button of deleteButtons) {
        button.addEventListener("click", function(event) {
            let isbn = event.target.getAttribute("data-isbn");
            deleteBook(isbn); // Call deleteBook function with ISBN
        });
    }
}

// Function to update an existing book
function updateBook(isbn, updatedBook) {
    let index = books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
        books[index] = updatedBook;
        updateLocalStorage();
        displayBooks(); // Refresh books display after updating
    
    } else {
        alert(`Book with ISBN ${isbn} not found.`);
    }
}

function deleteBook(isbn) {
    books = books.filter((book) => book.isbn !== isbn);
    updateLocalStorage();
    displayBooks(); // Refresh books display after deleting
}

// Function to update local storage with current books array
function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

// Function to retrieve books from local storage on page load
function getBooksFromLocalStorage() {
    let storedBooks = localStorage.getItem("books");
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    } else {
        books = []; // Initialize books array if local storage is empty
    }
}


// Event listeners for form submissions
document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let isbn = document.getElementById("isbn").value;
    addBook(title, author, year, isbn);
    document.getElementById("addBookForm").reset(); // Clear form inputs after submission
});

document.getElementById("updateBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isbn = document.getElementById("updateIsbn").value;
    let title = document.getElementById("updateTitle").value;
    let author = document.getElementById("updateAuthor").value;
    let year = document.getElementById("updateYear").value;
    updateBook(isbn, { title: title, author: author, year: year, isbn: isbn });
    document.getElementById("updateBookForm").reset(); // Clear form inputs after submission
});

document.getElementById("deleteBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isbn = document.getElementById("deleteIsbn").value;
    deleteBook(isbn);
    document.getElementById("deleteBookForm").reset(); // Clear form inputs after submission
});


getBooksFromLocalStorage();
// Initial display of books
displayBooks();


