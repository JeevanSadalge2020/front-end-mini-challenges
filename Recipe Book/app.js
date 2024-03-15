import apiKey from "./api_key.js";

const container = document.querySelector("main .container");

async function getRecipes() {
  /* Use hard coded data incase API fails OR add a try catch feature to use either API or local data */
  const recipes_response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
  );
  return recipes_response.json();
}

async function displayRecipes() {
  let res = await getRecipes();
  let recipes = res.recipes;

  for (const item of recipes) {
    const { title, sourceURL, image } = item;
    const ingredients = item.extendedIngredients
      .map((item) => item.original)
      .join(", ");

    const img = document.createElement("img");
    img.classList.add("recipe-image");
    img.setAttribute("src", image);

    const h3 = document.createElement("h3");
    h3.classList.add("recipe-title");
    h3.textContent = title;

    const span = document.createElement("span");
    span.textContent = "Ingredients: ";

    const paragraph = document.createElement("p");
    paragraph.classList.add("recipe-details");
    paragraph.append(span, ingredients);

    const link = document.createElement("a");
    link.classList.add("recipe-link");
    link.setAttribute("href", sourceURL);

    const button = document.createElement("button");
    button.textContent = "View Recipe";
    link.appendChild(button);

    const article = document.createElement("article");
    article.classList.add("recipe");

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(paragraph);
    article.appendChild(button);

    container.appendChild(article);
  }
}

displayRecipes();
