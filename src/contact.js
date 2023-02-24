const contactTabContent = () => {
  // create DOM elements
  const tabPlaceHolder = document.querySelector(".tab-placeholder");
  const contactBtn = document.querySelector(".contact");
  const contactTab = document.createElement("div");
  const footer = document.createElement("div");
  const contactsHeader = document.createElement("h2");
  const bookings = document.createElement("div");
  const managerContact = document.createElement("div");
  const gitLink = document.createElement("a");
  // text content
  contactsHeader.textContent = "Contact";
  bookings.textContent = "Bookings: +359 123 123 123";
  managerContact.textContent = "Manager: +359 124 124 124";
  gitLink.href = "https://github.com/blancpain/restaurant-page";
  gitLink.textContent = "Made by Yasen Dimitrov";
  // add classes
  contactTab.classList.add("home-tab");
  footer.classList.add("footer");
  contactsHeader.classList.add("contacts-header");
  bookings.classList.add("contacts-text");
  managerContact.classList.add("contacts-text");
  contactBtn.classList.add("button-clicked");
  // build tree
  tabPlaceHolder.appendChild(contactTab);
  contactTab.appendChild(contactsHeader);
  contactTab.appendChild(bookings);
  contactTab.appendChild(managerContact);
  tabPlaceHolder.appendChild(footer);
  footer.appendChild(gitLink);
};

export default contactTabContent;
