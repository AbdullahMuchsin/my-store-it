const navToggle = document.querySelector(".menu-toggle input");
const navUl = document.querySelector("nav ul");

navToggle.addEventListener("click", function () {
  navUl.classList.toggle("slide");
});
