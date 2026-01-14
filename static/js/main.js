// ------------------------------
// ACTIVE NAV LINK ON SCROLL
// ------------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-indigo-600");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-indigo-600");
    }
  });
});
