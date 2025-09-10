   // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuClose = document.getElementById('menuClose');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });

    menuClose.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
      mobileMenu.classList.remove('translate-x-0');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
      });
    });

    // Animate fade-in sections on scroll
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
