const botao = document.querySelector("#botaoMensagem");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Muito bem! O JavaScript está funcionando.";
  mensagem.classList.toggle("mensagem-destaque");
});
