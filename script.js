let jogoAtivo = true;
let humanScore = 0;
let computerScore = 0;  
const botoes = document.querySelectorAll("button");
const resultado = document.getElementById("resultado");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    if(!jogoAtivo) return;
    const escolhaJogador = botao.id;
    const escolhaComputador = gerarEscolhaComputador();
    const vencedor = decidirVencedor(escolhaJogador, escolhaComputador);
    if(computerScore === 5){
      resultado.textContent = "Você perdeu o jogo..";
      jogoAtivo = false;
    }else if(humanScore === 5){
      resultado.textContent = "Você ganhou o jogo!! 🎉🎉🎉";
      jogoAtivo = false;
    };
    if(!jogoAtivo) return;
    resultado.textContent = `Você escolheu ${escolhaJogador}, o computador escolheu ${escolhaComputador}. Resultado: ${vencedor}`;
  });
});

function gerarEscolhaComputador() {
  const opcoes = ["pedra", "papel", "tesoura"];
  const aleatorio = Math.floor(Math.random() * 3);
  return opcoes[aleatorio];
}

function decidirVencedor(jogador, computador) {
  if (jogador === computador) {
    resultado.classList.remove("vitoria", "derrota");
    return "Empate!";
  }
  if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    humanScore += 1;
    document
      .querySelector("#scoreJogador")
      .setAttribute("data-score", humanScore);
    resultado.classList.remove("derrota");
    resultado.classList.add("vitoria");
    return "Você venceu! 🎉";
  } else {
    computerScore += 1;
    document
      .querySelector("#scoreComputador")
      .setAttribute("data-score-comp", computerScore);
    resultado.classList.remove("vitoria");
    resultado.classList.add("derrota");
    return "Você perdeu... 😢";
  }
}