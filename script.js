//Hamburger menu

const hamMenu = document.querySelector(".ham-menu");

const linksContainer = document.querySelector(".links__container");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  linksContainer.classList.toggle("active");
});
