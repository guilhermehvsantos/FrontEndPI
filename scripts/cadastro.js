document
.getElementById("cadastroForm")
.addEventListener("submit", function (e) {
  e.preventDefault();

  // Captura os dados do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cpf = document.getElementById("cpf").value;
  const endereco = document.getElementById("endereco").value;

  // Aqui você normalmente enviaria esses dados para o servidor
  // Por enquanto, vamos apenas simular um cadastro bem-sucedido
  console.log("Dados do cliente:", {
    nome,
    email,
    telefone,
    cpf,
    endereco,
  });

  // Mostra mensagem de sucesso
  document.getElementById("successMessage").style.display = "block";

  // Limpa o formulário
  this.reset();

  // Esconde a mensagem após 3 segundos
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
    window.location.href = "html/index.html"; // Redireciona para a página index.html
  }, 1500);
});

// Função para formatar o CPF
document.getElementById("cpf").addEventListener("input", function (e) {
let cpf = e.target.value.replace(/\D/g, "");
if (cpf.length > 11) cpf = cpf.slice(0, 11);
cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
e.target.value = cpf;
});

// Função para formatar o telefone
document
.getElementById("telefone")
.addEventListener("input", function (e) {
  let telefone = e.target.value.replace(/\D/g, "");
  if (telefone.length > 11) telefone = telefone.slice(0, 11);
  if (telefone.length > 10) {
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (telefone.length > 5) {
    telefone = telefone.replace(
      /(\d{2})(\d{4})(\d{0,4})/,
      "($1) $2-$3"
    );
  } else if (telefone.length > 2) {
    telefone = telefone.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  }
  e.target.value = telefone;
});