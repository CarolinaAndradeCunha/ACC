document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("nav button, .welcome-buttons button");
  const sections = document.querySelectorAll("main .section");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-section");

      // Remove classe "active" de todas as seções e botões
      sections.forEach(section => section.classList.remove("active"));
      document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));

      // Adiciona "active" à seção e botão clicado
      const section = document.getElementById(target);
      if (section) {
        section.classList.add("active");
      }

      // Adiciona "active" apenas se for botão de navegação
      if (button.closest("nav")) {
        button.classList.add("active");
      }
    });
  });
});
