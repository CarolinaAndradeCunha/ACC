function getDadosFormulario() {
  const form = document.getElementById("formulario");
  const dados = {
    nome: form.nome.value.trim(),
    cpf: form.cpf.value.trim(),
    email: form.email.value.trim(),
    telefone: form.telefone.value.trim(),
    renda: form.renda.value.trim(),
    dependentes: form.dependentes.value,
    observacoes: form.observacoes.value.trim()
  };

  for (let key in dados) {
    if (!dados[key]) {
      alert("Por favor, preencha todos os campos.");
      return null;
    }
  }

  return dados;
}

function enviarWhatsApp() {
  const dados = getDadosFormulario();
  if (!dados) return;

  const msg =
    `*Imposto de Renda - Solicitação*\n\n` +
    `👤 Nome: ${dados.nome}\n` +
    `🧾 CPF: ${dados.cpf}\n` +
    `📧 E-mail: ${dados.email}\n` +
    `📱 Telefone: ${dados.telefone}\n` +
    `💰 Renda Anual: R$ ${dados.renda}\n` +
    `👶 Possui Dependentes? ${dados.dependentes}\n` +
    `📝 Observações: ${dados.observacoes}`;

  const url = `https://wa.me/5511968449833?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function enviarEmail() {
  const dados = getDadosFormulario();
  if (!dados) return;

  const assunto = "Solicitação de Imposto de Renda";
  const corpo =
    `Imposto de Renda - Solicitação\n\n` +
    `Nome: ${dados.nome}\n` +
    `CPF: ${dados.cpf}\n` +
    `E-mail: ${dados.email}\n` +
    `Telefone: ${dados.telefone}\n` +
    `Renda Anual: R$ ${dados.renda}\n` +
    `Possui Dependentes? ${dados.dependentes}\n` +
    `Observações: ${dados.observacoes}`;

  const mailto = `mailto:drica_acc@hotmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  window.open(mailto, '_blank');
}
