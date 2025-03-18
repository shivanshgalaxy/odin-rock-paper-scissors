let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const winningOptions = {"rock": "scissors", "paper": "rock", "scissors": "paper"};
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! ${humanChoice} ties with ${computerChoice}.`);
    } else if (winningOptions[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        ++humanScore;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        ++computerScore;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === computerScore) {
        console.log("It's a tie!");
    } else if (humanScore > computerScore) {
        console.log("Woohoo, you win!");
    } else {
        console.log("You lost, better luck next time : (");
    }
}