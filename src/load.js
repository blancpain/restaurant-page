const loadPage = () => {
  // create DOM elements
  const content = document.querySelector("#content");
  const main = document.createElement("div");
  const tabPlaceholder = document.createElement("div");
  const header = document.createElement("div");
  const menuSection = document.createElement("div");
  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contact = document.createElement("div");

  // add classes
  main.classList.add("main");
  header.classList.add("header");
  menuSection.classList.add("menu-section");
  home.classList.add("home");
  menu.classList.add("menu");
  contact.classList.add("contact");
  tabPlaceholder.classList.add("tab-placeholder");

  // build tree
  content.appendChild(main);
  main.appendChild(header);
  main.appendChild(menuSection);
  main.appendChild(tabPlaceholder);
  menuSection.appendChild(home);
  menuSection.appendChild(menu);
  menuSection.appendChild(contact);

  // text content
  header.textContent = "Pavlovo Steak";
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
};

export default loadPage;
