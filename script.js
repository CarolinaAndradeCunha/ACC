const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
      menuBtn.innerHTML = "&#10006;"; // Ícone de fechar
    } else {
      menuBtn.innerHTML = "&#9776;"; // Ícone de menu
    }
  });
}

if (menuLinks.length > 0) {
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      if (menuBtn) {
        menuBtn.innerHTML = "&#9776;"; // Ícone de menu ao fechar
      }
    });
  });
}

const voltarInicioBtn = document.createElement("button");
voltarInicioBtn.textContent = "↑";
voltarInicioBtn.classList.add("voltar-topo");
document.body.appendChild(voltarInicioBtn);

voltarInicioBtn.style.display = "none";

const handleScroll = () => {
  const contabilidadeSection = document.getElementById("contabilidade");
  if (contabilidadeSection) {
    const contabilidadeTop = contabilidadeSection.offsetTop;

    if (window.scrollY >= contabilidadeTop - 100) {
      voltarInicioBtn.style.display = "block";
    } else {
      voltarInicioBtn.style.display = "none";
    }
  }

  // Mostrar animação de entrada para as seções
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop <= windowHeight * 0.8) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", handleScroll);

// Verifica uma vez ao carregar a página para as animações de entrada
handleScroll();

voltarInicioBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
