const menuBtn = document.querySelector('.menu-nav__btn');
const menu = document.querySelector('.main-nav__dropdown');
const preload = document.querySelector('.preload');
const nav = document.querySelector('.page-header__top');

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
  document.body.classList.toggle('locked');

  if (window.pageYOffset < 120) {
    nav.classList.toggle('header_tiny');
  }
});

window.addEventListener("scroll", () => {

  if (window.pageYOffset > 120) {
    nav.classList.add('header_tiny');
  } else {
    nav.classList.remove('header_tiny');
  }
});
