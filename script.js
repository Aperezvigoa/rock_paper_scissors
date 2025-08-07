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

// --- Adding the DIV
const resultDiv = document.querySelector("#results");

function appendResult(result) {
    resultDiv.appendChild(result);
}

function playRound(humanChoice, computerChoice) {
    let pText = document.createElement("p");
    if (humanChoice.toUpperCase() == computerChoice.toUpperCase()) {
        pText.textContent = "Same result!";
        appendResult(pText);
    } else if (humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "PAPER") {
        computerScore += 1;
        pText.textContent = "Computer wins, paper wins rock";
        appendResult(pText);
    } else if (humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "SCISSORS") {
        humanScore += 1;
        pText.textContent = "Human wins, rock wins scissors";
        appendResult(pText);
    } else if (humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "ROCK") {
        humanScore += 1;
        pText.textContent = "Human wins, paper wins rock";
        appendResult(pText);
    } else if (humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "SCISSORS") {
        computerScore += 1;
        pText.textContent = "Computer wins, scissors wins paper";
        appendResult(pText);
    } else if (humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "ROCK") {
        computerScore += 1;
        pText.textContent = "Computer wins, rock wins scissors";
        appendResult(pText);
    } else if (humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "PAPER") {
        humanScore += 1;
        pText.textContent = "Human wins, scissors wins paper";
        appendResult(pText);
    }
    playGame();
}

function playGame() {
    if (humanScore == 5 && humanScore > computerScore) {
        alert("Human wins with " + humanScore + " points.");
        humanScore = 0;
        computerScore = 0;
        resultDiv.replaceChildren();
    } else if (computerScore == 5 && computerScore > humanScore) {
        alert("Computer wins with " + computerScore + " points.");
        humanScore = 0;
        computerScore = 0;
        resultDiv.replaceChildren();
    }
}

//playGame();
// --- Added buttons and functionality
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scsbtn = document.querySelector("#scissors");

rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

