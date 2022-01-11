const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientEl;

for (let ingredient of ingredients) {
  ingredientEl = document.createElement("li");
  ingredientEl.textContent = [ingredient];
  ingredientEl.classList.add('class="item"');

  document.getElementById("ingredients").appendChild(ingredientEl);
}

