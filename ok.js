// let rock = "Rock";
// let paper= "Paper";
// let scissors="Scissors";
// let computerSelection;
// let playerSelection;

//    function numGen() {
//       let randoNum = Math.floor(Math.random() * 100);
//       return randoNum;}

//  let getComputerChoice = function(rock, paper, scissors, numGen) {
//    let result = numGen();
//    if (result >20 && result<45) {
//      console.log(paper);
//    } else if (result > 75 && result<=80) {
//      console.log(scissors);
//    } else {
//      console.log(rock);
//    }
// }

// function roundOne(playerSelection,computerSelection){

// playerSelection =  prompt('Rock,Paper,Or Scissors?');

// console.log(playerSelection);

// computerSelection= getComputerChoice(rock,paper,scissors,numGen);

// console.log(computerSelection)

// if(playerSelection==rock && computerSelection==paper){

//   console.log( 'you lose, paper beats rock')
// }

// else if(playerSelection==paper &&computerSelection==rock  ){
// console.log('You win, paper beats rock')

// }

// else if(playerSelection==rock && computerSelection==scissors ){
//   console.log('You win, rock beats scissors')
// }

// else if(playerSelection==scissors && computerSelection==rock){
//   console.log('You lose, rock beats scissors')
// }

// else if(playerSelection==scissors && computerSelection==paper){
//   console.log('You win,scissors beats paper')
// }
//  else if(playerSelection==paper && computerSelection==scissors)
//  {console.log('You lose, scissors beats paper')}

//  else{roundOne(computerSelection,playerSelection)}




//poss== rock &paper &rock & scissors & paper & scissors

//sep//












let rock = "rock"
let paper = "paper";
let scissors = "scissors";
let computerSelection;
let playerSelection;

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

function roundOne(playerSelection, computerSelection) {
  playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
console.log(playerSelection)

  computerSelection = getComputerChoice(rock, paper, scissors, numGen);
  console.log(computerSelection);



  if (playerSelection === rock && computerSelection === paper) {
    console.log('You lose, paper beats rock');
  } else if (playerSelection === paper && computerSelection === rock) {
    console.log('You win, paper beats rock');
  } else if (playerSelection === rock && computerSelection === scissors) {
    console.log('You win, rock beats scissors');
  } else if (playerSelection === scissors && computerSelection === rock) {
    console.log('You lose, rock beats scissors');
  } else if (playerSelection === scissors && computerSelection === paper) {
    console.log('You win, scissors beats paper');
  } else if (playerSelection === paper && computerSelection === scissors) {
    console.log('You lose, scissors beats paper');
  } else {
    roundOne(computerSelection, playerSelection);
  }
}

const rck = document.getElementById('rock')  //rock button
const ppr= document.getElementById('paper') //paper button
const scsr= document.getElementById('scissors') //scissors button 

