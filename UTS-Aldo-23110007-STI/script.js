const mobileNav = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");

const toggleNav = () => {
  menubar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const navbar = document.querySelector("nav");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

console.log(navbar);