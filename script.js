// Seleção dos elementos com querySelector
const form = document.querySelector("#formCadastro");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const nascimento = document.querySelector("#nascimento");
const termos = document.querySelector("#termos");
const btnCadastrar = document.querySelector("#btnCadastrar");
const feedback = document.querySelector("#feedback");

// Evento de clique no botão
btnCadastrar.onclick = function (event) {
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
