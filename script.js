let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case(0):
            choice = "pedra";
            break;
        case(1):
            choice = "papel";
            break;
        case(2):
            choice = "tesoura";
            break;
    }
    return choice;
}

console.log(getComputerChoice())

function getHumanChoice(){
    let humanChoice = prompt("Escolha sua jogada:");
    return humanChoice;
}

console.log(getHumanChoice());