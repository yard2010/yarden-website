// Mobile menu: add or remove the "open" class, and the CSS does the rest
const nav = document.querySelector("#site-nav");
const openMenuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");

openMenuButton.addEventListener("click", () => {
  nav.classList.add("open");
});

closeMenuButton.addEventListener("click", () => {
  nav.classList.remove("open");
});

// Say hello with the name from the field
const nameInput = document.querySelector("#name-input");
const helloButton = document.querySelector("#hello-button");

helloButton.addEventListener("click", () => {
  alert(`שלום, ${nameInput.value}`);
});
