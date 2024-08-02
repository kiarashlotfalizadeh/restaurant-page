import Food from './food-image.jpg';

function initialHomePage() {
  let contentDiv = document.querySelector("#content");
  
  const foodImage = new Image();
  foodImage.src = Food;
  foodImage.className = "home-image";
  contentDiv.appendChild(foodImage);

  let headlineDiv = document.createElement("div");
  headlineDiv.className = "headline";
  headlineDiv.textContent = "Exquisite Culinary Art: Minimalist Gourmet Dish Showcases Precision and Flavor";
  contentDiv.appendChild(headlineDiv);

  let descriptionDiv = document.createElement("div");
  descriptionDiv.className = "description";
  descriptionDiv.textContent = "This beautifully plated gourmet dish exemplifies the art of minimalist fine dining. A delicately seasoned piece of fish is accompanied by artfully arranged vegetable rounds and a touch of creamy sauce, all set on a pristine white plate. The simplicity of the presentation highlights the chef's precision and attention to detail, creating a visually stunning and appetizing experience."
  contentDiv.appendChild(descriptionDiv);
}

export { initialHomePage };