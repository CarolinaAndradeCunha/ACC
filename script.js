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

function coletarDadosFormulario() {
  const form = document.querySelector("form#formulario");
  return {
    nome: form.nome.value,
    cpf: form.cpf.value,
    email: form.email.value,
    telefone: form.telefone.value,
    renda: form.renda.value,
    dependentes: form.dependentes.value,
    observacoes: form.observacoes.value
  };
}

function enviarWhatsApp() {
  const dados = coletarDadosFormulario();
  const mensagem = `*Imposto de Renda - Solicitação*\n\n` +
    `*Nome:* ${dados.nome}\n` +
    `*CPF:* ${dados.cpf}\n` +
    `*E-mail:* ${dados.email}\n` +
    `*Telefone:* ${dados.telefone}\n` +
    `*Renda Anual:* R$ ${dados.renda}\n` +
    `*Possui Dependentes:* ${dados.dependentes}\n` +
    `*Observações:* ${dados.observacoes}`;

  const numero = "5511968449833";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

function enviarEmail() {
  const dados = coletarDadosFormulario();
  const assunto = "Solicitação de Imposto de Renda";
  const corpo = `Olá,\n\nSegue os dados para solicitação do IR:\n\n` +
    `Nome: ${dados.nome}\n` +
    `CPF: ${dados.cpf}\n` +
    `E-mail: ${dados.email}\n` +
    `Telefone: ${dados.telefone}\n` +
    `Renda Anual: R$ ${dados.renda}\n` +
    `Possui Dependentes: ${dados.dependentes}\n` +
    `Observações: ${dados.observacoes}`;

  const link = `mailto:drica_acc@hotmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  window.open(link, '_blank');
}
