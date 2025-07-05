let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice){
        case(0):
            computerChoice = "pedra";
            break;
        case(1):
            computerChoice = "papel";
            break;
        case(2):
            computerChoice = "tesoura";
            break;
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Escolha sua jogada:");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if(computerChoice === "pedra"){
        switch(humanChoice){
            case("papel"):
                console.log(`Papel ganha de ${computerChoice}, você ganhou!`);
                humanScore += 1;
                break;
            case("tesoura"):
                console.log(`Tesoura perde de ${computerChoice}, você perdeu ;-;`);
                computerScore +=1;
                break;
            case("pedra"):
                console.log(`Ambos jogaram ${computerChoice}, vocês empataram!`);
                break;
            default:
                console.log("Jogada não definida");
        };
    }else if(computerChoice === "papel"){
        switch(humanChoice){
            case("papel"):
                console.log(`Ambos jogaram ${computerChoice}, vocês empataram!`);
                break;
                case("tesoura"):
                console.log(`Tesoura ganha de ${computerChoice}, você ganhou!`);
                humanScore += 1;
                break;
                case("pedra"):
                console.log(`Pedra perde de ${computerChoice}, você perdeu ;-;`);
                computerScore +=1;
                break;
            default:
                console.log("Jogada não definida");
        };
    };
}