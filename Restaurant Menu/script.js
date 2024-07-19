document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const menuItems = [
        { id: 1, name: 'Caprese Salad', category: 'main-course', price: 8.99 , img: './images/item1.jpeg' },
        { id: 2, name: 'Margherita Pizza', category: 'curry', price: 12.99, img: './images/item2.jpeg'},
        { id: 3, name: 'Tiramisu', category: 'curry', price: 6.99, img: './images/item3.webp' },
        { id: 4, name: 'Bruschetta', category: 'snacks', price: 5.99, img: './images/item4.jpeg' },
        { id: 5, name: 'Pasta Carbonara', category: 'snacks', price: 15.99, img: './images/item5.jpeg' },
        { id: 6, name: 'Cannoli', category: 'main-course', price: 4.99, img: './images/item6.jpeg' },
    ];

    //display all
    function displayAllItems(items){
        menuContainer.innerHTML = '';

        items.forEach((item)=>{
            const menuItem = document.createElement('div');
            menuItem.classList.add = 'menu-item';
            menuItem.innerHTML = `
                <img src=${item.img} alt=${item.name} class="menu-item-img">
                <div class="menu-item-details">
                    <h2>${item.name}</h2>
                    <p>${item.category}</p>
                    <p>${item.price}</p>
                </div>
            `
            menuContainer.appendChild(menuItem);
        })
    }
    displayAllItems(menuItems);

    //filter
    function filterItems(category){
        if(category === 'all'){
            displayAllItems(menuItems);
        }else{
            const filteredItems = menuItems.filter(item => item.category === category);
            displayAllItems(filteredItems);
        }
    }

    filterButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            const itemCategory = button.getAttribute('data-category');
            filterItems(itemCategory);
        })
    })
})