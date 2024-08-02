function initialMenuPage() {
  let contentDiv = document.querySelector("#content");

  let appetizerDiv = document.createElement("div");
  appetizerDiv.className = 'appetizers';
  
  let appetizerTitle = document.createElement('div');
  appetizerTitle.className = 'menu-header';
  appetizerTitle.textContent = 'Appetizers';

  let appetizerOne = document.createElement('div');
  appetizerOne.className = 'menu-item';
  appetizerOne.textContent = 'Poached Half Lobster, Fried Artichoke Hearts, Truffle Aioli, Fingerling Potatoes, The New Farm Rocket, Fine Herbs';

  let appetizerTwo = document.createElement('div');
  appetizerTwo.className = 'menu-item';
  appetizerTwo.textContent = 'Burrata, Heirloom Tomatoes, Stone Fruit, Mint Pesto, Sourdough';

  let appetizerThree = document.createElement('div');
  appetizerThree.className = 'menu-item';
  appetizerThree.textContent = 'Foie Gras Terrine, Strawberry Gelée, Pickled Green Strawberries, Celery, Brandy Gel, Toasted Brioche';

  appetizerDiv.append(appetizerTitle, appetizerOne, appetizerTwo, appetizerThree);

  let entreeDiv = document.createElement('div');
  entreeDiv.className = 'entrees';

  let entreeTitle = document.createElement('div');
  entreeTitle.className = 'menu-header';
  entreeTitle.textContent = 'Entrees';

  let entreeOne = document.createElement('div');
  entreeOne.className = 'menu-item';
  entreeOne.textContent = "Gunn's Hill Brie-Stuffed Agnolotti, Charred Sweetcorn, Chanterelles, Manchego, Périgord Truffle Beurre Monté";

  let entreeTwo = document.createElement('div');
  entreeTwo.className = 'menu-item';
  entreeTwo.textContent = 'Whole Rotisserie Voltigeur Chicken, Glazed Baby Carrots, Artichoke, Potato Confit, Spring Baby Green Salad, Chicken Jus';

  let entreeThree = document.createElement('div');
  entreeThree.className = 'menu-item';
  entreeThree.textContent = 'Whole Rotisserie King Cole Duck, Roasted Beetroot, Glazed Turnips, Sautéed Spinach, Blackberries, Braised Cabbage, Duck Jus';

  entreeDiv.append(entreeTitle, entreeOne, entreeTwo, entreeThree);

  let dessertDiv = document.createElement('div');
  dessertDiv.className = 'desserts';

  let dessertTitle = document.createElement('div');
  dessertTitle.className = 'menu-header';
  dessertTitle.textContent = 'Desserts';  

  let dessertOne = document.createElement('div');
  dessertOne.className = 'menu-item';
  dessertOne.textContent = 'Salted Caramel Ice Cream Profiteroles, Pecan Whipped Ganache, Chocolate Dome';

  let dessertTwo = document.createElement('div');
  dessertTwo.className = 'menu-item';
  dessertTwo.textContent = 'Chocolate and Whisky Crémeux, Maple Chantilly, Whisky Ice Cream';

  let dessertThree = document.createElement('div');
  dessertThree.className = 'menu-item';
  dessertThree.textContent = 'Vanilla Charlotte, Roasted Apricot Compote, Ladyfinger Sponge';

  dessertDiv.append(dessertTitle, dessertOne, dessertTwo, dessertThree);

  contentDiv.append(appetizerDiv, entreeDiv, dessertDiv);
}

export { initialMenuPage };