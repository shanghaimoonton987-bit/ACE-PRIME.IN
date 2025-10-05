// main.js - small behaviour for the demo site

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // If you want to read settings from main.jc
  fetch('main.jc')
    .then(res => res.json())
    .then(cfg => {
      // Example: use siteTitle from settings
      if (cfg && cfg.siteTitle) {
        document.title = cfg.siteTitle + ' — ' + cfg.ownerName;
        const h = document.querySelector('.brand');
        if (h) h.innerHTML = cfg.ownerName.split(' ')[0] + ' <span class="prime">' + cfg.ownerName.split(' ')[1] + '</span>';
      }
    })
    .catch(()=>{ /* ignore if not found */});
});
