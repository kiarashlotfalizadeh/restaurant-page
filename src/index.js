import "./styles.css";
import { initialHomePage } from "./page-load";
import { initialMenuPage } from "./menu-page";
import { initialAboutPage } from "./about-page";

let homeButton = document.querySelector(".home-button");
let menuButton = document.querySelector(".menu-button");
let aboutButton = document.querySelector(".about-button");
let contentDiv = document.querySelector("#content");

initialHomePage();

homeButton.addEventListener("click", function() {
  contentDiv.innerHTML = "";
  initialHomePage();
})

menuButton.addEventListener("click", function() {
  contentDiv.innerHTML = "";
  initialMenuPage();
})

aboutButton.addEventListener("click", function() {
  contentDiv.innerHTML = "";
  initialAboutPage();
})