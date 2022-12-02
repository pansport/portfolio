"use strict";

// HAMBURGER MENU
const openMenu = document.querySelector(
  ".icon-mobile-nav[name='menu-outline']"
);
const closeMenu = document.querySelector(
  ".icon-mobile-nav[name='close-outline']"
);

// SMOOTH SCROLLING
const homeBtn = document.getElementById("home");
const aboutMeBtn = document.getElementById("about-me");
const aboutMeBtn2 = document.getElementById("about-me-2");
const skillsBtn = document.getElementById("skills");
const contactBtn = document.getElementById("contact");

const firstSection = document.querySelector(".first-section");
const secondSection = document.querySelector(".second-section");
const thirdSection = document.querySelector(".third-section");
const fourthSection = document.querySelector(".fourth-section");

// STICKY NAVIGATION
const nav = document.querySelector(".navigation");
const navHeight = nav.getBoundingClientRect().height;

// HAMBURGER MENU
openMenu.addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("nav-open");
});
closeMenu.addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.querySelector(".navigation").classList.toggle("nav-open");
  });
});

// STICKY NAVIGATION
const obsCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(firstSection);

// SMOOTH SCROLLING
homeBtn.addEventListener("click", () => {
  const sectionCoords = firstSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionCoords.left,
    top: sectionCoords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

aboutMeBtn.addEventListener("click", () => {
  const sectionCoords = secondSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionCoords.left,
    top: sectionCoords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

aboutMeBtn2.addEventListener("click", () => {
  const sectionCoords = secondSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionCoords.left,
    top: sectionCoords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

skillsBtn.addEventListener("click", () => {
  const sectionCoords = thirdSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionCoords.left,
    top: sectionCoords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

contactBtn.addEventListener("click", () => {
  const sectionCoords = fourthSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionCoords.left,
    top: sectionCoords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

// REVEAL SECTIONS
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
