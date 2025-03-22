let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    console.log("rock");
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    console.log("paper");
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    console.log("scissors");
    playRound("scissors", getComputerChoice())
});


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
    const playerScoreElement = document.querySelector("#player-score");
    const computerScoreElement = document.querySelector("#computer-score")

    const winningOptions = {"rock": "scissors", "paper": "rock", "scissors": "paper"};
    const roundResult = document.querySelector(".round-result");
    const playerPlay = document.querySelector("#player-play");
    const computerPlay = document.querySelector("#computer-play");
    playerPlay.innerText = humanChoice;
    computerPlay.innerText = computerChoice;
    if (humanChoice === computerChoice) {
        roundResult.innerText = `It's a draw! ${humanChoice} ties with ${computerChoice}.`;
    } else if (winningOptions[humanChoice] === computerChoice) {
        roundResult.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
        playerScoreElement.innerText = ++humanScore;
    } else {
        roundResult.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScoreElement.innerText = ++computerScore;
    }

    if (humanScore === 5 || computerScore === 5) {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((btn) => {
            btn.disabled = true;
        })
        const gameResult = document.querySelector(".game-result");
        gameResult.innerText = humanScore === 5 ? "Congratulations you won!" : "You lost! Better luck next time.";
        gameResult.innerText += "\nRefresh the page to play a new game.";
    }
}