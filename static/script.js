document.addEventListener("DOMContentLoaded", function () {
  const serviceSection = document.getElementById("services");
  const serviceImage = document.getElementById("serviceImage");

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceImage.style.opacity = 1;
        } else {
          serviceImage.style.opacity = 0;
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(serviceSection);

  const hero = document.getElementById("hero");

  if (!hero) {
    console.error("Hero element not found");
    return;
  }

  window.addEventListener("scroll", function () {
    const heroHeight = hero.offsetHeight;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    let fadeOutEffect = 1 - scrollPosition / heroHeight;
    fadeOutEffect = Math.max(fadeOutEffect, 0);

    hero.style.opacity = fadeOutEffect;
  });
});
