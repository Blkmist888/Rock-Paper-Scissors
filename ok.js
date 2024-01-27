
//sep//
let rock ='rock';
let scissors ='scissors';
let paper='paper';
let playerSelection ='you are the winner';
let computerSelection ='you are the winner';
//sep//

function getComputerChoice(rock,paper,scissors) {
    let result=Math.floor(Math.random()*100) ;//decides random number
    if (result>=0 && result<=49) {
          return rock;
           
         } 
         
        else if(result>=50 && result<=74){ 
             return scissors;
        
        }
      else if(result>=75 && result<=90 ){
       return paper;
       }
   }

function roundOne(playerSelection, computerSelection) {
   if ( playerSelection===true && rock===true && paper===true) {
      'you win rock beats paper'
      
   }
else if(computerSelection===true && rock===true && paper===true){ 'you win rock beats paper'}

else if(computerSelection===true&& rock===true && scissors===true){'you lose rock beats scissors'}

else if(computerSelection===true && paper===true && scissors===true){'you lose scissors beats paper'}


   else if (playerSelection===true && rock===true && scissors===true)
   { 'you lose scissors beats rock'}

    else if ( playerSelection===true && paper===true && scissors===true){
'you lose scissors beats paper'
    }
   else{'you tied try again'}
   }

roundOne(getComputerChoice)