let playerChoice=""
let compChoice=""
let choices = ['Rock', 'Paper', 'Scissors']

function play(){
  computerMove()
if (playerChoice === 'Rock' && compChoice === 'Scissors'){
  document.getElementById("whoWon").innerText = "YOU WON!!"
}
else if (playerChoice === 'Rock' && compChoice === 'Paper'){
  document.getElementById("whoWon").innerText = "YOU LOSE!!"
}
else if (playerChoice === 'Scissors' && compChoice === 'Paper'){
  document.getElementById("whoWon").innerText = "YOU WON!!"
}
else if (playerChoice === 'Scissors' && compChoice === 'Rock'){
  document.getElementById("whoWon").innerText = "YOU LOSE!!"
}
else if (playerChoice === 'Paper' && compChoice === 'Rock'){
  document.getElementById("whoWon").innerText = "YOU WON!!"
}
else if (playerChoice === 'Paper' && compChoice === 'Scissors'){
  document.getElementById("whoWon").innerText = "YOU LOSE!!"
}
else {document.getElementById("whoWon").innerText = "It was a tie"}
}

function computerMove(){
var randomIndex = Math.floor(Math.random() * choices.length); 
var randomElement = choices[randomIndex];
  compChoice = randomElement;
  document.getElementById("compChoice").innerText = randomElement;

}

function rock(){
  playerChoice = "Rock"
  play()
  document.getElementById("playerChoice").innerText = "Rock";
}

function paper(){
  let playerChoice = "Paper";
  play()
  document.getElementById("playerChoice").innerText = "Paper";
}

function scissors(){
  let playerChoice = "Scissors";
  play()
  document.getElementById("playerChoice").innerText = "Scissors";
}



  
