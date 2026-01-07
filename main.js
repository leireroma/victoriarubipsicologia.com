// Simple JavaScript for interactive elements

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navTrigger = document.getElementById('nav-trigger');
  if (navTrigger) {
    navTrigger.addEventListener('change', function() {
      // Menu toggle handled by CSS
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
