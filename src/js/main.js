const menuBtn = document.querySelector('.menu-nav__btn');
const menu = document.querySelector('.main-nav__dropdown');
const preload = document.querySelector('.preload');

window.addEventListener("load", () => {
  setTimeout((function () {
    preload.classList.add("loading")
  }), 300),
    menuBtn.classList.remove("active"),
    menu.classList.remove("active")
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
