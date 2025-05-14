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
    