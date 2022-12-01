"use strict";

const openMenu = document.querySelector(
  ".icon-mobile-nav[name='menu-outline']"
);
const closeMenu = document.querySelector(
  ".icon-mobile-nav[name='close-outline']"
);

openMenu.addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("nav-open");
});
closeMenu.addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("nav-open");
});
