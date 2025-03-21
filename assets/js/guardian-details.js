document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  // Only dark mode (ignore light mode)
  themeSwitch.addEventListener('change', () => {
    // No matter checked or not, always add 'dark-mode' and remove 'light-mode'
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  });

  //--------------------------------
  // (Optional) GSAP Animations
  //--------------------------------

  // If you want subtle fade-ins:
  gsap.to(".hero-content h1", {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.2,
    ease: "power3.out",
    from: { y: 50, opacity: 0 }
  });
  gsap.to(".hero-content p", {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.4,
    ease: "power3.out",
    from: { y: 50, opacity: 0 }
  });

  // Animate on scroll utility
  function animateOnScroll(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      gsap.set(el, { opacity: 0, y: 20 });
    });

    window.addEventListener('scroll', () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          gsap.to(el, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out",
            overwrite: true
          });
        }
      });
    });
  }

  // Animate these sections
  animateOnScroll('.intro-img img, .intro-text, .details-text, .details-img img, .extra-text, .extra-img img');
});
