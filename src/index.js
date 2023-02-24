import "./style.css";
import loadPage from "./load";
import homeTabContent from "./home";
import menuTabContent from "./menu";
import contactTabContent from "./contact";

loadPage();

const clearTabContent = () => {
  const tabPlaceholder = document.querySelector(".tab-placeholder");
  while (tabPlaceholder.hasChildNodes()) {
    tabPlaceholder.removeChild(tabPlaceholder.firstChild);
  }
  tabChanger.homeLink.classList.remove("button-clicked");
  tabChanger.menuLink.classList.remove("button-clicked");
  tabChanger.contactLink.classList.remove("button-clicked");
};

const tabChanger = (() => {
  // select DOM elements
  const homeLink = document.querySelector(".home");
  const menuLink = document.querySelector(".menu");
  const contactLink = document.querySelector(".contact");

  // event listeners
  homeLink.addEventListener("click", () => {
    clearTabContent();
    homeTabContent();
  });
  menuLink.addEventListener("click", () => {
    clearTabContent();
    menuTabContent();
  });
  contactLink.addEventListener("click", () => {
    clearTabContent();
    contactTabContent();
  });

  return { homeLink, menuLink, contactLink };
})();
