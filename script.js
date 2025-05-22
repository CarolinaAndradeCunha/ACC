document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-section]");
  const sections = document.querySelectorAll(".section");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-section");

      sections.forEach(section => {
        section.classList.remove("active");
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
