const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
// scrolling animation
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header-btn-wrapper", {
  ...scrollRevealOption,
  delay: 1500,
});
// exploresection animation
ScrollReveal().reveal(".explore-image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore-content .section-title", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore-content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .explore-btn-wrapper", {
  ...scrollRevealOption,
  delay: 1500,
});
// dishes section 
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
// contact form 
const contactLink = document.getElementById("contact-link");
const contactModal = document.getElementById("contact-modal");
const closeForm = document.getElementById("close-form");

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "block";
});

closeForm.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});