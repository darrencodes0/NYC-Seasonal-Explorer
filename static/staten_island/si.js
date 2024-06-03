document.addEventListener('DOMContentLoaded', function() {
const hero = document.querySelector('.hero-content'); 

window.addEventListener('scroll', function() {
  const heroHeight = hero.offsetHeight;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  let fadeOutEffect = 1 - (scrollPosition / (heroHeight / 2)); // division factor controls fade effect speed
  fadeOutEffect = Math.max(fadeOutEffect, 0); // make sure the value doesn't go below 0

  hero.style.opacity = fadeOutEffect;
});
});

