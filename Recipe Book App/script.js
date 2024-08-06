const container = document.querySelector('.list');
const API_KEY = "f25a870bee4343809f593c2850fdf7a7";

function displayRecipes(recipes){
    container.innerHTML = '';
    recipes.forEach((recipe)=>{
        const div = document.createElement('div');
        div.classList.add('recipes');
        const img = document.createElement('img');
        img.src = recipe.image;
        const title = document.createElement('h2');
        title.textContent = recipe.title;
        const text = document.createElement('p');
        text.innerHTML = 
        `<strong>Ingredients: </strong> ${recipe.extendedIngredients
            .map((ingredient) => ingredient.original)
            .join(', ')}`;
        const view = document.createElement('a');
        view.href = recipe.sourceUrl;
        view.textContent = 'View Recipe';

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(text);
        div.appendChild(view);
        container.appendChild(div);
    })
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data.recipes);
    return data.recipes;

}

async function recipes(){
    const recipes = await getRecipes();
    displayRecipes(recipes)
}


recipes();