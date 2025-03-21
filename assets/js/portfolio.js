document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  // Toggle for Dark/Light Mode
  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  });

  //--------------------------------
  // GSAP Animations
  //--------------------------------

  // Hero Content
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
  gsap.to(".project-tags", {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.6,
    ease: "power3.out",
    from: { y: 50, opacity: 0 }
  });

  // Animate sections on scroll
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

  // Targets to animate
  animateOnScroll('.intro-img img, .intro-text, .details-text, .details-img img, .extra-text, .extra-img img');
});
