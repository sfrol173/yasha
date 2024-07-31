//Hamburger menu

const hamMenu = document.querySelector(".ham-menu");

const linksContainer = document.querySelector(".links__container");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  linksContainer.classList.toggle("active");
});

//get price

const buttonPrice = document.querySelector(".btn-price");
const buttonPriceClose = document.querySelector(".button-price-close");
const modalWrapper = document.querySelector(".price-modal");

modalWrapper.style.display = "none";
buttonPrice.addEventListener("click", () => {
  modalWrapper.style.display = "block";
  document.body.classList.add("disable-scroll");
});
buttonPriceClose.addEventListener("click", () => {
  modalWrapper.style.display = "none";
  document.body.classList.remove("disable-scroll");
});
