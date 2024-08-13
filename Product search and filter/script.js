document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('product-list');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search');

    const menuItems = [
        { id: 1, name: 'Hoodie for everyone', category: 'hoodies', price: 25, img: './assets/hoodie1.png' },
        { id: 2, name: 'Stylish Hoodie', category: 'hoodies', price: 25, img: './assets/hoodie2.png' },
        { id: 3, name: 'Trending hoodie', category: 'hoodies', price: 25, img: './assets/hoodie3.png' },
        { id: 4, name: 'Hoodie fashion', category: 'hoodies', price: 25, img: './assets/hoodie4.png' },
        { id: 5, name: 'Branded tshirt', category: 'tshirts', price: 25, img: './assets/tshirt1.png' },
        { id: 6, name: 'Puma tshirt', category: 'tshirts', price: 25, img: './assets/tshirt2.png' },
        { id: 7, name: 'Jack & Jones tees', category: 'tshirts', price: 25, img: './assets/tshirt3.png' },
        { id: 8, name: 'Stylish tshirt', category: 'tshirts', price: 25, img: './assets/tshirt4.png' },
        { id: 9, name: 'Sneakers', category: 'shoes', price: 25, img: './assets/shoe1.png' },
        { id: 10, name: 'Adidas Sneakers', category: 'shoes', price: 25, img: './assets/shoe2.png' },
        { id: 11, name: 'Adidas Grand Court Sneaker', category: 'shoes', price: 25, img: './assets/shoe3.jpg' },
        { id: 12, name: 'Trendy Shirt', category: 'shirts', price: 25, img: './assets/f1.jpg' },
        { id: 13, name: 'Trendy Shirt', category: 'shirts', price: 25, img: './assets/f2.jpg' },
        { id: 14, name: 'Trendy Shirt', category: 'shirts', price: 25, img: './assets/f3.jpg' },
        { id: 15, name: 'Trendy Shirt', category: 'shirts', price: 25, img: './assets/f4.jpg' },
        { id: 16, name: 'Trendy Shirt', category: 'shirts', price: 25, img: './assets/f5.jpg' },
    ];

    let filteredItems = menuItems;

    function displayAllItems(items) {
        menuContainer.innerHTML = '';
        items.forEach((item) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('product');
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" />
                <div class="p-details">
                    <h2>${item.name}</h2>
                    <h3>$${item.price}</h3>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    function filterItems(category) {
        if (category === 'all') {
            filteredItems = menuItems;
        } else {
            filteredItems = menuItems.filter(item => item.category === category);
        }
        displayAllItems(filteredItems);
        setActiveFilter(category);
    }

    function search() {
        const query = searchInput.value.toUpperCase();
        const searchResults = filteredItems.filter(item => item.name.toUpperCase().includes(query));
        displayAllItems(searchResults);
    }


    function setActiveFilter(category) {
        filterButtons.forEach(button => {
            if (button.getAttribute('data-category') === category) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }



    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const itemCategory = button.getAttribute('data-category');
            filterItems(itemCategory);
           
        });
    });

    searchInput.addEventListener('keyup', search);

    // Initial display of all items
    displayAllItems(menuItems);
});
