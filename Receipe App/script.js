const button = document.getElementById('btn');
const input = document.getElementById('search-input');
const mainContainer = document.getElementById('main-container');
const apiKey = 'f25a870bee4343809f593c2850fdf7a7';

button.addEventListener('click', async ()=>{
    const query = input.value.trim();
    if(query){
        try{
            const recipes = await recipeFind(query);
            console.log('recipes : ' , recipes);
            input.value = '';
            displayRecipes(recipes);
        }catch(error){
            console.error("Not found", error);
        }
    }else{
        console.log('Please enter a search query');
    }
});

async function recipeFind(query){

    try{
        const url = `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.results;
    }catch(error){
        console.log("Error fetching recipe", error);
        return [];
    }
}

function displayRecipes(recipes){
    mainContainer.innerHTML ='';
    if(!recipes || recipes.length === 0){
        console.log("No results found");
        return;
    }

    recipes.forEach((recipe)=>{
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = `https://spoonacular.com/recipeImages/${recipe.image}`;
        img.alt = recipe.title;
        const h2 = document.createElement('h2');
        h2.textContent = recipe.title;;
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View Recipe';
        viewButton.addEventListener('click', ()=>{
            window.open(recipe.sourceUrl, "_blank");
        });

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(viewButton);

        mainContainer.append(card);
    })
}
