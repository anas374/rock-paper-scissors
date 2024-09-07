function getComputerChoice() {
    const choices = [`rock`, `paper`, `scissors`];
    let computerChoice = Math.floor(Math.random() * 10);

    if (computerChoice < 3) {
        return choices[0];
    } 
    else if (computerChoice >= 3 && computerChoice < 6) {
        return choices[1];
    } else {
        return choices[2];
    }
}


function getHumanChoice() {
    const choices = [`rock`, `paper`, `scissors`];
    let humanChoice = parseInt(prompt("Please enter you choice\n 1 = Rock, 2 = Paper, 3 = Scissors."));

    if (humanChoice > 0 && humanChoice <= 3) {
        return choices[humanChoice - 1];
    } 
    else {
        alert("Invalid response, please enter 1, 2, or 3.")
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "rock" ) {
            alert("It's a draw!");
            console.log("It's a draw!");
            return "It's a draw!"; 
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            alert("You lose! Paper beats Rock");
            console.log("You lose! Paper beats Rock");
            return "You lose! Paper beats Rock";
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            alert("You Win! Rock beats Scissors");
            console.log("You Win! Rock beats Scissors");
            return "You Win! Rock beats Scissors";
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            alert("You Win! Paper beats Rock");
            console.log("You Win! Paper beats Rock");
            return "You Win! Paper beats Rock";
        }
        else if (humanChoice == "paper" && computerChoice == "paper") {
            alert("It's a draw!");
            console.log("It's a draw!");
            return "It's a draw!";
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            alert("You Lose! Scissors beats Paper");
            console.log("You Lose! Scissors beats Paper");
            return "You Lose! Scissors beats paper";
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            alert("You Lose! Rock beats Scissors");
            console.log("You Lose! Rock beats Scissors");
            return "You Lose! Rock beats Scissors";
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            alert("You Win! Scissors beats Paper");
            console.log("You Win! Scissors beats Paper");
            return "You Win! Scissors beats Paper";
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors") {
            alert("It's a draw!");
            console.log("It's a draw!");
            return "It's a draw!";
        }
    }

    while(humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore == 5) {
        alert(`Human Score: ${humanScore}\nComputer Score: ${computerScore}\nYou win the game!`);
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}\nYou win the game!`);

        humanScore = 0;
        computerScore = 0;

        return "Human Score: ${humanScore}\nComputer Score: ${computerScore}\nYou win the game!";
    } 
    else {
        alert(`Human Score: ${humanScore}\nComputer Score: ${computerScore}\nYou lose the game!`);
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}\nYou lose the game!`);

        humanScore = 0;
        computerScore = 0;

        return "Human Score: ${humanScore}\nComputer Score: ${computerScore}\nYou lose the game!";
    }
}