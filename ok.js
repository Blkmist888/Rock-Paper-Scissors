

let rock = "rock"
let paper = "paper";
let scissors = "scissors";
let computerSelection;
let playerSelection;
let playerScore;
let computerScore;
let playerWins;
let computerWins;

playerScore=0;
computerScore=0;

playerWins=false
computerWins=false

// Initialize computerWins to false

const divAre= document.getElementById('containerDiv')

const playerScoreDisplay= document.getElementById('player-score')
const compScoreDisplay=document.getElementById('computer-score')





function numGen() {
  let randoNum = Math.floor(Math.random() * 100);
  return randoNum;
}

let getComputerChoice = function (rock, paper, scissors, numGen) {
  let result = numGen();
  if (result > 20 && result < 45) {
    return paper;
  } else if (result > 75 && result <= 80) {
    return scissors;
  } else {
    return rock;
  }
}

function playRound(playerSelection, computerSelection) {

 //DOM METHOD
  computerSelection = getComputerChoice(rock, paper, scissors, numGen);
 //DOM METHOD
 


 
 //I AM MISSING SOME OF THE POSSIBLE ROCK PAPER SCISSORS OUTCOMES
 

  if (playerSelection === rock && computerSelection === paper) {
    divAre.textContent='You lose, paper beats rock';  
    computerWins=true//append
  playerWins=false
  } else if (playerSelection === paper && computerSelection === rock) {
    divAre.textContent='You win, paper beats rock';  
      playerWins=true
      computerWins=false//append  
  } else if (playerSelection === rock && computerSelection === scissors) {
    divAre.textContent='You win, rock beats scissors'; 
    playerWins=true
     computerWins=false//append
  } else if (playerSelection === scissors && computerSelection === rock) {
    divAre.textContent='You lose, rock beats scissors'; 
    computerWins=true
    playerWins=false//append
  } else if (playerSelection === scissors && computerSelection === paper) {
    divAre.textContent='You win, scissors beats paper';
    playerWins=true 
    computerWins=false//append
  } else if (playerSelection === paper && computerSelection === scissors) {
    divAre.textContent='You lose, scissors beats paper';
    computerWins=true
    playerWins=false
    //append
  } else {
    divAre.textContent='Tie'
    playerWins=false
    computerWins=false
 
    
  }
    
    if (playerWins) {
      playerScore++;
    } else if (computerWins) {
      computerScore++;
    }
    
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    compScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if(playerScore===3){divAre.textContent='YOU WIN!'}
    else if(computerScore===3){divAre.textContent='YOU LOSE'}
}
 
 
const rck = document.getElementById('rck')  //rock button
const ppr= document.getElementById('ppr') //paper button
const scsr= document.getElementById('ssc') ;//scissors button 

rck.addEventListener('click', e => playRound('rock',computerSelection))
ppr.addEventListener('click', e => playRound('paper',computerSelection))
scsr.addEventListener('click',e => playRound('scissors',computerSelection))

