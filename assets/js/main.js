document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
  
    // Dark/Light Mode Toggle
    themeSwitch.addEventListener('change', () => {
      if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
      } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
      }
    });
  
    // Hamburger Menu Toggle (for mobile)
    hamburgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
      hamburgerMenu.setAttribute('aria-expanded', !expanded);
    });
  
    //--------------------------------
    // GSAP Animations
    //--------------------------------
  
    // Hero: fade-in for heading, subheading, buttons
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
      delay: 0.5,
      ease: "power3.out",
      from: { y: 50, opacity: 0 }
    });
    gsap.to(".hero-buttons", {
      duration: 1,
      opacity: 1,
      y: 0,
      delay: 0.8,
      ease: "power3.out",
      from: { y: 50, opacity: 0 }
    });
  
    // Utility function to animate elements on scroll
    function animateOnScroll(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        gsap.set(el, { opacity: 0, y: 20 });
      });
  
      window.addEventListener('scroll', () => {
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
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
  
    // Animate About, Projects, Contact sections on scroll
    animateOnScroll('.about-image img, .about-text, .projects-section h2, .projects-section p, .projects-grid, .contact-section h2, .contact-section p, .contact-icons');
  });
  