// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
// Add shadow to navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 10) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
// Script to reset animations on carousel slide change
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('#heroCarousel');
  carousel.addEventListener('slide.bs.carousel', () => {
    const texts = document.querySelectorAll('.carousel-item .text');
    const images = document.querySelectorAll('.carousel-item .image');

    texts.forEach(text => {
      text.style.animation = 'none';
      void text.offsetWidth; // Trigger reflow
      text.style.animation = 'fadeInLeft 1s ease-in-out';
    });

    images.forEach(image => {
      image.style.animation = 'none';
      void image.offsetWidth; // Trigger reflow
      image.style.animation = 'fadeInRight 1s ease-in-out';
    });
  });
});
// Add shadow to navbar on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar-custom');
  if (window.scrollY > 10) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  const lightbox = GLightbox({
    selector: '.glightbox'
  });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      let form = e.target;
      let name = form.name;
      let email = form.email;
      let message = form.message;

      let isValid = true;

      if (!name.value.trim()) {
        name.classList.add("is-invalid");
        isValid = false;
      } else {
        name.classList.remove("is-invalid");
      }

      if (!email.value.trim() || !email.value.includes("@")) {
        email.classList.add("is-invalid");
        isValid = false;
      } else {
        email.classList.remove("is-invalid");
      }

      if (!message.value.trim()) {
        message.classList.add("is-invalid");
        isValid = false;
      } else {
        message.classList.remove("is-invalid");
      }

      if (isValid) {
        document.getElementById("successMsg").classList.remove("d-none");
        form.reset();
      }
    });
