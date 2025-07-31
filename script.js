let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    switch (computerNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getUserChoice() {
    let choice = prompt("Write your choice! Rock, Paper or Scissors!");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toUpperCase() == computerChoice.toUpperCase()) {
        console.log("Same result!");
    } else if (humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "PAPER") {
        console.log("Computer wins, paper wins rock");
        computerScore += 1;
    } else if (humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "SCISSORS") {
        console.log("Human wins, rock wins scissors");
        humanScore += 1;
    } else if (humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "ROCK") {
        console.log("Human wins, paper wins rock");
        humanScore += 1;
    } else if (humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "SCISSORS") {
        console.log("Computer wins, scissors wins paper");
        computerScore += 1;
    } else if (humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "ROCK") {
        console.log("Computer wins, rock wins scissors");
        computerScore += 1;
    } else if (humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "PAPER") {
        console.log("Human wins, scissors wins paper");
        humanScore += 1;
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getUserChoice();
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log("Human wins with " + humanScore + " points.")
    } else {
        console.log("Computer wins with " + computerScore + " points.")
    }
}

playGame();