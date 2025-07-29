// Botão do menu hambúrguer
const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });
}

// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Fecha o menu mobile após o clique no link (mobile UX)
    if (menu.classList.contains("ativo")) {
      menu.classList.remove("ativo");
    }
  });
});

// Efeito "reveal on scroll" usando IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".reveal-on-scroll").forEach(el => {
  observer.observe(el);
});

// Efeito de transição ao carregar a página
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
