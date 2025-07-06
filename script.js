let humanScore = 0;
let computerScore = 0;
const choices = ["pedra", "papel", "tesoura"];

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function getHumanChoice() {
  let humanChoice;
  do {
    humanChoice = prompt("Insira sua escolha(Pedra, Papel ou Tesoura): ");
  } while (!choices.includes(humanChoice.toLowerCase()));
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Vocês empataram!");
  } else if (
    (humanChoice === "papel" && computerChoice === "pedra") ||
    (humanChoice === "tesoura" && computerChoice === "papel") ||
    (humanChoice === "pedra" && computerChoice === "tesoura")
  ) {
    console.log(
      `Você jogou ${humanChoice}, e o computador jogou ${computerChoice}. Você ganhou!!`
    );
    humanScore += 1;
  } else if (
    (computerChoice === "papel" && humanChoice === "pedra") ||
    (computerChoice === "tesoura" && humanChoice === "papel") ||
    (computerChoice === "pedra" && humanChoice === "tesoura")
  ) {
    console.log(
      `Você jogou ${humanChoice}, e o computador jogou ${computerChoice}. Você perdeu!!`
    );
    computerScore += 1;
  }
}

function playGame(){
    for(let i = 0; i < 5; i++){
      let humanSelect = getHumanChoice();
      let computerSelect = getComputerChoice();
      playRound(humanSelect, computerSelect);
    }
    if(humanScore > computerScore){
        console.log(`Você fez ${humanScore - computerScore} pontos a mais do que o computador, parabéns!`)
    }else if(computerScore > humanScore){
        console.log(`Você fez ${computerScore - humanScore} pontos a menos que o computador, você perdeu!`)
    }else{
        console.log(`Vocês empataram com ${humanScore} pontos`)
    }
}

playGame()