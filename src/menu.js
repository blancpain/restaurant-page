const menuTabContent = () => {
  // create DOM elements
  const tabPlaceHolder = document.querySelector(".tab-placeholder");
  const menuTab = document.createElement("div");
  const footer = document.createElement("div");
  const menuHeader = document.createElement("h2");
  // add classes
  menuTab.classList.add("menu-tab");
  menuHeader.classList.add("menu-header");
  footer.classList.add("footer");
  // build tree
  tabPlaceHolder.appendChild(menuHeader);
  tabPlaceHolder.appendChild(menuTab);
  tabPlaceHolder.appendChild(footer);

  // text content
  menuHeader.textContent = "Steaks";
  footer.textContent = "Footer";
  // menu items
  const menuItemOne = document.createElement("div");
  const menuItemOnePrice = document.createElement("div");
  menuItemOne.classList.add("menu-item");
  menuItemOnePrice.classList.add("menu-item");
  menuItemOnePrice.classList.add("menu-item-price");
  menuItemOne.textContent = "Chateaubriand (350g)";
  menuItemOnePrice.textContent = "45.50";
  menuTab.appendChild(menuItemOne);
  menuTab.appendChild(menuItemOnePrice);
  const menuItemTwo = document.createElement("div");
  const menuItemTwoPrice = document.createElement("div");
  menuItemTwo.classList.add("menu-item");
  menuItemTwoPrice.classList.add("menu-item");
  menuItemTwoPrice.classList.add("menu-item-price");
  menuItemTwo.textContent = "Fillet (300g)";
  menuItemTwoPrice.textContent = "29.50";
  menuTab.appendChild(menuItemTwo);
  menuTab.appendChild(menuItemTwoPrice);
  const menuItemThree = document.createElement("div");
  const menuItemThreePrice = document.createElement("div");
  menuItemThree.classList.add("menu-item");
  menuItemThreePrice.classList.add("menu-item");
  menuItemThreePrice.classList.add("menu-item-price");
  menuItemThree.textContent = "Rib-eye (450g)";
  menuItemThreePrice.textContent = "39.00";
  menuTab.appendChild(menuItemThree);
  menuTab.appendChild(menuItemThreePrice);
  const menuItemFour = document.createElement("div");
  const menuItemFourPrice = document.createElement("div");
  menuItemFour.classList.add("menu-item");
  menuItemFourPrice.classList.add("menu-item");
  menuItemFourPrice.classList.add("menu-item-price");
  menuItemFour.textContent = "Sirloin (300g)";
  menuItemFourPrice.textContent = "38.50";
  menuTab.appendChild(menuItemFour);
  menuTab.appendChild(menuItemFourPrice);
  const menuItemFive = document.createElement("div");
  const menuItemFivePrice = document.createElement("div");
  menuItemFive.classList.add("menu-item");
  menuItemFivePrice.classList.add("menu-item");
  menuItemFivePrice.classList.add("menu-item-price");
  menuItemFive.textContent = "Rump (300g)";
  menuItemFivePrice.textContent = "25.50";
  menuTab.appendChild(menuItemFive);
  menuTab.appendChild(menuItemFivePrice);
  const menuItemSix = document.createElement("div");
  const menuItemSixPrice = document.createElement("div");
  menuItemSix.classList.add("menu-item");
  menuItemSixPrice.classList.add("menu-item");
  menuItemSixPrice.classList.add("menu-item-price");
  menuItemSix.textContent = "T-bone (500g)";
  menuItemSixPrice.textContent = "55.50";
  menuTab.appendChild(menuItemSix);
  menuTab.appendChild(menuItemSixPrice);
};

export default menuTabContent;
