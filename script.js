// Seleção dos elementos
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const nascimento = document.getElementById("nascimento");
const termos = document.getElementById("termos");
const btnCadastrar = document.getElementById("btnCadastrar");
const feedback = document.getElementById("feedback");

// Evento de clique no botão
btnCadastrar.onclick = function(event) {
  event.preventDefault(); // evita envio real do formulário

  let erros = [];

  // Validações
  if (nome.value.trim() === "") {
    erros.push("• O campo Nome não pode estar vazio.");
  }
  if (!email.value.includes("@")) {
    erros.push("• O e-mail deve conter '@'.");
  }
  if (senha.value.length < 8) {
    erros.push("• A senha deve ter no mínimo 8 caracteres.");
  }
  if (nascimento.value === "") {
    erros.push("• A data de nascimento é obrigatória.");
  }
  if (!termos.checked) {
    erros.push("• É necessário aceitar os termos.");
  }

  // Exibição da mensagem
  if (erros.length > 0) {
    feedback.innerText = erros.join("\n");
    feedback.style.color = "red";
  } else {
    feedback.innerText = "Cadastro realizado com sucesso!";
    feedback.style.color = "green";
  }
};
