function initialAboutPage() {
  let contentDiv = document.querySelector("#content");

  let aboutTitle = document.createElement('div');
  aboutTitle.className = 'about-title';
  aboutTitle.textContent = 'About Us';
 
  let aboutDiv = document.createElement('div');
  aboutDiv.className = 'about-content';
  aboutDiv.textContent = 'Welcome to our restaurant, where culinary artistry meets exquisite flavors. Nestled in the heart of Paris, our restaurant offers an unparalleled fine dining experience, celebrating the rich heritage of French cuisine. Our talented chefs blend traditional techniques with innovative flair to create dishes that are both visually stunning and delectably satisfying. Each meal is crafted with the finest locally-sourced ingredients, ensuring a fresh and authentic taste of France. From our meticulously curated wine selection to our elegant and intimate ambiance, our restaurant promises an unforgettable gastronomic journey. Join us and indulge in the essence of French fine dining, where every dish is a masterpiece.';

  contentDiv.append(aboutTitle, aboutDiv);
}

export { initialAboutPage };