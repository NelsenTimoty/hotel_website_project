const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}

function img(anything) {
    document.querySelector('.slide').src = anything;
}

function change(change) {
    const line = document.querySelector('.image');
    line.style.background = change;
}

function img(anything) {
    document.querySelector('.slide').src = anything;
  }

function change(change) {
    const line = document.querySelector('.image');
    line.style.background = change;
  }

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })