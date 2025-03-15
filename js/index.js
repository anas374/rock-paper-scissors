const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const playerScore = document.querySelector("#human-score");
const compScore = document.querySelector("#comp-score");

let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock" ) {
        roundResult.textContent = "It's a draw!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        roundResult.textContent = "You lose! Paper beats Rock";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        roundResult.textContent = "You Win! Rock beats Scissors";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        roundResult.textContent = "You Win! Paper beats Rock";
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        roundResult.textContent = "It's a draw!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        roundResult.textContent = "You Lose! Scissors beats Paper";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        roundResult.textContent = "You Lose! Rock beats Scissors";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        roundResult.textContent = "You Win! Scissors beats Paper";
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        roundResult.textContent = "It's a draw!";
    }

    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;

     if (humanScore >= 5 || computerScore >= 5) {
        playerScore.textContent = 0;
        compScore.textContent = 0;
        
        alert(humanScore === 5 ? "You win!" : "You lose!"); 
        
        humanScore = 0;
        computerScore = 0;
        roundResult.textContent = "New game! Choose again.";
    }
}

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));