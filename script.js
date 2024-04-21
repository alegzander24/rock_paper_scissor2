const rock = document.querySelector("#btn-rock");
const paper = document.querySelector("#btn-paper");
const scissors = document.querySelector("#btn-scissors");
const showResult = document.querySelector(".result");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerChoice = getComputerChoice();

  if (playerSelection === computerChoice) {
    showResult.textContent = "It's a tie";
  } else if (
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissors" && computerChoice === "paper")
  ) {
    showResult.textContent = "You win!!";
    playerScore++;
  } else {
    showResult.textContent = "You lose!!";
    computerScore++;
  }

  updateScoreDisplay();

  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function announceWinner() {
  if (playerScore === 5) {
    showResult.textContent = "You win the game!";
  } else {
    showResult.textContent = "Computer wins the game!";
  }
}

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
