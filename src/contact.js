const contactTabContent = () => {
  // create DOM elements
  const tabPlaceHolder = document.querySelector(".tab-placeholder");
  const contactTab = document.createElement("div");
  const footer = document.createElement("div");
  const contactsHeader = document.createElement("h2");
  const bookings = document.createElement("div");
  const managerContact = document.createElement("div");
  // text content
  footer.textContent = "Footer";
  contactsHeader.textContent = "Contact";
  bookings.textContent = "Bookings: +359 123 123 123";
  managerContact.textContent = "Manager: +359 124 124 124";
  // add classes
  contactTab.classList.add("home-tab");
  footer.classList.add("footer");
  contactsHeader.classList.add("contacts-header");
  bookings.classList.add("contacts-text");
  managerContact.classList.add("contacts-text");
  // build tree
  tabPlaceHolder.appendChild(contactTab);
  contactTab.appendChild(contactsHeader);
  contactTab.appendChild(bookings);
  contactTab.appendChild(managerContact);
  tabPlaceHolder.appendChild(footer);
};

export default contactTabContent;
