const btnNav = document.querySelector(".btn-mobile-nav");
const hero = document.querySelector(".section-hero");
const checkNav = document.querySelector(".main-nav-list");

btnNav.addEventListener("click", function () {
  hero.classList.toggle("nav-open");
});

checkNav.addEventListener("click", function () {
  if (hero.classList.contains("nav-open")) hero.classList.remove("nav-open");
});

const allLinks = document.querySelectorAll(`a:link`);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-item"))
      navCon.classList.toggle("nav-open");
  });
});
