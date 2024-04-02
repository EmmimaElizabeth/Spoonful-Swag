const ingredientsForm = document.getElementById("ingredients-form");
const recipesContainer = document.getElementById("recipes-container");

const recipes = [
  {
    name: "Apple Pie",
    ingredients: ["lemonjuice", "butter","piecrust"],
  },
  {
    name: "Sizzling Brownie",
    ingredients: ["butter", "bakingpowder", "sugar","eggs"],
  },
  {
    name: "Chicken Biriyani",
    ingredients: ["chicken", "redchillipowder","onions","cuminseeds"],
  },
  {
    name: "Malai Kofta",
    ingredients: ["cottagecheese", "redchillipowder","onion","tomato"],
  }, 
  {
    name: "Rasamalai",
    ingredients: ["milk", "sugar","lemonjuice"],
  },
  {
    name: "Ratatouille",
    ingredients: ["eggplant", "tomato","onions"],
  },
  {
    name: "Creamy Vegetable Kurma",
    ingredients: ["onions", "tomatoes","cuminseeds","reedchillipowder"],
  },
  {
    name: "Kunafa",
    ingredients: ["kataifi", "butter","sugar","lemonjuice"],
  },

];

ingredientsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkedIngredients = Array.from(ingredientsForm.elements)
    .filter((input) => input.type === "checkbox" && input.checked)
    .map((input) => input.value);

  let matchingRecipes = recipes.filter((recipe) => {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      if (!checkedIngredients.includes(recipe.ingredients[i])) {
        return false;
      }
    }
    return true;
  });

  recipesContainer.innerHTML = "";
  if (matchingRecipes.length === 0) {
    recipesContainer.innerHTML = "<p>No recipes found!</p>";
  } else {
    for (let i = 0; i < matchingRecipes.length; i++) {
      const recipe = matchingRecipes[i];
      const recipeDiv = document.createElement("div");
      recipeDiv.className = "recipe";
      recipeDiv.innerHTML = `<h3>${recipe.name}</h3>`;
      const ingredientsList = document.createElement("ul");
      recipe.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });
      recipeDiv.appendChild(ingredientsList);
      recipesContainer.appendChild(recipeDiv);
    }
  }
});