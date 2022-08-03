const btnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".navigation");

btnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});
