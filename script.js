// Scroll suave para links internos (menu)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animação reveal on scroll com IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      // Se quiser, para parar de observar depois que revelou:
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  observer.observe(el);
});

// Transição de opacidade ao carregar página
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
