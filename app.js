// API endpoint for featured recipes
const apiEndpoint = window.location.origin;
console.log("API Endpoint:", apiEndpoint);

// Fetch data from the API endpoint
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(recipes => {
    // Create a container element for the recipes
    const recipeContainer = document.getElementById('recipe-container');

    // Loop through the recipes and create a card element for each one
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      recipeCard.innerHTML = `
        <h2>${recipe.name}</h2>
        <p>${recipe.ingredients}</p>
        <button>View Recipe</button>
      `;

      // Add the card element to the container
      recipeContainer.appendChild(recipeCard);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });