// Botão do menu hambúrguer
const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    
    // Atualiza o atributo de acessibilidade
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
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
    // Fecha o menu mobile após o clique no link
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
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
