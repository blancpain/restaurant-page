const loadPage = () => {
  // DOM elements
  const content = document.querySelector("#content");
  const main = document.createElement("div");
  const header = document.createElement("div");
  const menuSection = document.createElement("div");
  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contact = document.createElement("div");
  const imageSection = document.createElement("div");
  const innerImageSection = document.createElement("div");
  const imageQuote = document.createElement("div");
  const bookNowBtn = document.createElement("div");
  const textSection = document.createElement("div");
  const footer = document.createElement("div");

  // add classes
  main.classList.add("main");
  header.classList.add("header");
  menuSection.classList.add("menu-section");
  home.classList.add("home");
  menu.classList.add("menu");
  contact.classList.add("contact");
  imageSection.classList.add("image-section");
  innerImageSection.classList.add("inner-image-section");
  imageQuote.classList.add("image-quote");
  bookNowBtn.classList.add("book-now");
  textSection.classList.add("text-section");
  footer.classList.add("footer");

  header.textContent = "Pavlovo Steak";
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  imageQuote.textContent = "Best restaurant in the Balkans";
  bookNowBtn.textContent = "Book Now";
  footer.textContent = "Footer";

  // build tree
  content.appendChild(main);
  main.appendChild(header);
  main.appendChild(menuSection);
  main.appendChild(imageSection);
  main.appendChild(textSection);
  main.appendChild(footer);
  menuSection.appendChild(home);
  menuSection.appendChild(menu);
  menuSection.appendChild(contact);
  imageSection.appendChild(innerImageSection);
  innerImageSection.appendChild(imageQuote);
  innerImageSection.appendChild(bookNowBtn);

  for (let index = 0; index < 3; index++) {
    const textSectionPara = document.createElement("p");
    textSection.appendChild(textSectionPara);
    textSectionPara.textContent = `Welcome to our amazing restaurant! Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
          `;
  }
};

export default loadPage;
