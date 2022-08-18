var playerWon = 0
var compuetWon = 0
function getComputerChoice(){
    let x = Math.random()*100
    if(x < 33){
        return "rock"
    }
    else if(x < 66){
        return "paper"
    }
    else{
        return "scissors"
    }
    
}

function playing(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It is a tie!"
        }
        else if(computerSelection == "paper"){
            compuetWon += 1;
            return "you lost paper beats rock"
        }
        else{
            playerWon += 1;
            return "you won paper beats scissors"
        }
    }

    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerWon += 1;
            return "you won paper beats rock"
        }
        else if(computerSelection == "paper"){
            return "It is a tie!"
        }
        else{
            compuetWon += 1;
            return "you lost scissors beats paper"
        }
    }

    else{ //scissor
        if(computerSelection == "rock"){
            compuetWon += 1;
            return "you lost rock beats scissprs"
        }
        else if(computerSelection == "paper"){
            playerWon += 1;
            return "you won scissors beat paper"
        }
        else{
            return "It is a tie"
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        let a = getComputerChoice();
        let b = prompt("Rock paper scissors: ");
        alert(playing(b,a))
        console.log(playing(b,a))
     }

     if(compuetWon > playerWon){
         alert("You lost " + compuetWon + " to " + playerWon)
     }
     else if(playerWon > compuetWon){
         alert("You won " + playerWon + " to " + compuetWon)
     }
     else{
         alert("It is a tie overall")
     }
}
game()
