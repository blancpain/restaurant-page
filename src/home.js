const homeTabContent = () => {
  // create DOM elements
  const tabPlaceHolder = document.querySelector(".tab-placeholder");
  const homeTab = document.createElement("home-tab");
  const imageSection = document.createElement("div");
  const innerImageSection = document.createElement("div");
  const imageQuote = document.createElement("div");
  const bookNowBtn = document.createElement("div");
  const textSection = document.createElement("div");
  const footer = document.createElement("div");

  // add classes
  homeTab.classList.add("home-tab");
  imageSection.classList.add("image-section");
  innerImageSection.classList.add("inner-image-section");
  imageQuote.classList.add("image-quote");
  bookNowBtn.classList.add("book-now");
  textSection.classList.add("text-section");
  footer.classList.add("footer");
  // build tree
  tabPlaceHolder.appendChild(homeTab);
  homeTab.appendChild(imageSection);
  homeTab.appendChild(textSection);
  homeTab.appendChild(footer);
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

  // text content
  imageQuote.textContent = "Best restaurant in the Balkans";
  bookNowBtn.textContent = "Book Now";
  footer.textContent = "Footer";
};

export default homeTabContent;
