function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * 3)]
}



function getPlayerSelection() {
    return prompt("choose rock, paper or scissors").toLocaleLowerCase()
}


function playRound(computerChoice, playerSelection) {
    if (playerSelection === computerChoice) {
        return "it's a tie"
    } else if (playerSelection === "rock" && computerChoice === "scissors" ||
        playerSelection === "paper" && computerChoice === "rock" ||
        playerSelection === "scissors" && computerChoice === "paper") {
        return "You win!!"
    }else {
        return "You loose!!"
    }
}





 

function playGame(){
    for (let i=0; i <5; i++){
        console.log(playRound(getComputerChoice(), getPlayerSelection()))
    }
}


playGame()

