const items = [
    { id: 1, name: 'Item 1', price: 250.00, img: './assets/tshirt6.jpg' },
    { id: 2, name: 'item 2', price: 200.00, img: './assets/f1.jpg' },
    { id: 3, name: 'item 3', price: 350.00, img: './assets/f2.jpg' },
    { id: 4, name: 'item 4', price: 200.00, img: './assets/f3.jpg' },
    { id: 5, name: 'item 5', price: 450.00, img: './assets/f4.jpg' },
    { id: 6, name: 'item 6', price: 500.00, img: './assets/f5.jpg' },
];

const cartContainer = document.querySelector('.cart-container');
const cartPage = document.getElementById('cart-page');
const totalElement = document.querySelector('.total');

let cartItems = []; // Array to hold items in the cart

function displayAll() {
    items.forEach((item) => {
        let div = document.createElement('div');
        div.classList.add('cart');
        div.innerHTML = `
            <img src="${item.img}"/>
            <h4>${item.name}</h4>
            <p>${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        cartContainer.appendChild(div);
    });
}

function addToCart(id) {
    let product = items.find((item) => item.id === id);
    if (product) {
        let existingItem = cartItems.find((item) => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        updateCartPage();
    }
}

function updateCartPage() {
    cartPage.innerHTML = ''; // Clear previous cart items
    let totalPrice = 0;

    cartItems.forEach((item) => {
        let div = document.createElement('div');
        div.classList.add('cart-item');

        let itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;

        div.innerHTML = `
            <img src="${item.img}"/>
            <h4>${item.name}</h4>
            <p>${itemTotalPrice}</p>
            <div class="btns">
                <button class="sub" onclick="decreaseQuantity(${item.id})">-</button>
                <p class="quantity">${item.quantity}</p>
                <button class="add" onclick="increaseQuantity(${item.id})">+</button>
            </div>
        `;
        cartPage.appendChild(div);
    });

    totalElement.textContent = `Total: ${totalPrice.toFixed(2)}`;
    updateCartSummary(totalPrice); // Update cart summary with total price
}

function updateCartSummary(totalPrice) {
    let summaryDiv = document.querySelector('.cart-summary');
    if (!summaryDiv) {
        summaryDiv = document.createElement('div');
        summaryDiv.classList.add('cart-summary');
        cartPage.appendChild(summaryDiv); // Append cart-summary if it doesn't exist
    }

    summaryDiv.innerHTML = `
        <div class="total">Total: ${totalPrice.toFixed(2)}</div>
        <div class="close-btn">Close</div>
    `;

    // Add event listener to close button
    let closeBtn = summaryDiv.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        cartPage.classList.remove('open');
    });
}

function increaseQuantity(id) {
    let item = cartItems.find((item) => item.id === id);
    if (item) {
        item.quantity++;
        updateCartPage();
    }
}

function decreaseQuantity(id) {
    let item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCartPage();
    } else {
        cartItems = cartItems.filter((item) => item.id !== id); // Remove item from cartItems array
        updateCartPage();
    }
}

displayAll();

const cartIcon = document.getElementById('cart-icon');
cartIcon.addEventListener('click', function() {
    cartPage.classList.toggle('open');
});
