document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll("nav button");
  const welcomeButtons = document.querySelectorAll(".welcome-buttons button");
  const sections = document.querySelectorAll(".section");

  function showSection(sectionId) {
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
  }

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      showSection(target);

      navButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  welcomeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      showSection(target);

      navButtons.forEach(btn => btn.classList.remove("active"));
      document.querySelector(`nav button[data-target="${target}"]`)?.classList.add("active");
    });
  });
});
