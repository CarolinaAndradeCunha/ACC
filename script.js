document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const topNav = document.getElementById("top-nav");
  const welcome = document.getElementById("welcome");
  const welcomeButtonsContainer = document.querySelector(".welcome-buttons");
  const sections = document.querySelectorAll("main .section");
  const navButtons = document.querySelectorAll("#top-nav button");
  const welcomeButtons = document.querySelectorAll(".welcome-buttons button");

  function mostrarSecao(id) {
    sections.forEach((sec) => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    welcome.classList.remove("active");
    topNav.classList.remove("hidden");
    welcomeButtonsContainer.classList.add("hidden");
  }

  function voltarParaBemVindo() {
    sections.forEach((sec) => sec.classList.remove("active"));
    welcome.classList.add("active");
    topNav.classList.add("hidden");
    welcomeButtonsContainer.classList.remove("hidden");
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      mostrarSecao(section);
    });
  });

  welcomeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      mostrarSecao(section);
    });
  });

  logo.addEventListener("click", voltarParaBemVindo);

  voltarParaBemVindo();
});
