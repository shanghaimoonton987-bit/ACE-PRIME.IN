// fx.js - for scroll reveal and smooth load
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Optional: fade on load
  document.body.style.opacity = 0;
  window.onload = () => {
    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = 1;
  };
});
