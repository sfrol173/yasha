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

buttonPrice.addEventListener("click", () => {
  modalWrapper.style.display = "block";
  document.body.classList.add("disable-scroll");
});
buttonPriceClose.addEventListener("click", () => {
  modalWrapper.style.display = "none";
  document.body.classList.remove("disable-scroll");
});

//header scroll

const headerWrapper = document.querySelector(".header__wraper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    headerWrapper.classList.add("header-bg-scroll");
  } else if (window.scrollY < 30) {
    headerWrapper.classList.remove("header-bg-scroll");
  }
});

//append later

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
const hiddenElements2 = document.querySelectorAll(".hidden-2");
hiddenElements2.forEach((el) => {
  observer.observe(el);
});
const hiddenElements3 = document.querySelectorAll(".hidden-3");
hiddenElements3.forEach((el) => {
  observer.observe(el);
});

//slide gallery

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}
