document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    // Sticky Navbar Scroll Effect
window.addEventListener("scroll", function () {

    const header = document.querySelector(".sticky-top");

    if (window.scrollY > 50) {
        header.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
    }

});
// slider section 

 // Hero Header carousel with fade in effect
$(".header-carousel").owlCarousel({
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',  // Added fadeIn effect
  items: 1,
  autoplay: true,
  smartSpeed: 1000, // Speed of the transition
  dots: false,
  loop: true,
  nav: true,
  navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
  ],
});

 // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


const slides = document.querySelectorAll('.tp-slide');
const dots = document.querySelectorAll('.tp-dot');
let current = 1000;

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4500);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    current = i;
    showSlide(current);
  });
});


    
});