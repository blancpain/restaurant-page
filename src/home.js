const homeTabContent = () => {
  // create/select DOM elements
  const tabPlaceHolder = document.querySelector(".tab-placeholder");
  const homeBtn = document.querySelector(".home");
  const homeTab = document.createElement("div");
  const imageSection = document.createElement("div");
  const innerImageSection = document.createElement("div");
  const imageQuote = document.createElement("div");
  const bookNowBtn = document.createElement("div");
  const textSection = document.createElement("div");
  const photoCredit1 = document.createElement("a");
  const footer = document.createElement("div");

  // add classes
  homeTab.classList.add("home-tab");
  imageSection.classList.add("image-section");
  innerImageSection.classList.add("inner-image-section");
  imageQuote.classList.add("image-quote");
  bookNowBtn.classList.add("book-now");
  textSection.classList.add("text-section");
  footer.classList.add("footer");
  homeBtn.classList.add("button-clicked");
  // build tree
  tabPlaceHolder.appendChild(homeTab);
  homeTab.appendChild(imageSection);
  homeTab.appendChild(textSection);
  tabPlaceHolder.appendChild(footer);
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
  footer.appendChild(photoCredit1);

  // text content
  imageQuote.textContent = "Best restaurant in the Balkans";
  bookNowBtn.textContent = "Book Now";
  photoCredit1.textContent = "Photo by Madie Hamilton";
  photoCredit1.href =
    "https://unsplash.com/@mham3816?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
};

export default homeTabContent;
