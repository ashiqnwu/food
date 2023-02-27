const loadMeal = (search ='') => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    document.getElementById('meals-container').innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h2 class="card-title">${meal.strMeal}</h2>
                        <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                    </div>
                </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv);
    });
}
 const searchFood =() =>{

    const searchField = document.getElementById('search-field').value;
    loadMeal(searchField);
    document.getElementById('search-field').value = '';
 }

 loadMeal();

