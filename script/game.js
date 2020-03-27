// John Kyker
// Created on March 26, 2020
// Script for simple Rock, Paper, Scissors game

// Defining the game tools. An array for the choices
var choices = ["Rock", "Paper", "Scissors"];
var player, comp;
var playerCounter, compCounter;
playerCounter = 0;
compCounter = 0;

// Click events for the player buttons and the reset
document.getElementById("RockBtn").addEventListener("click", function(){
    player = 0;
    playerChoice(player);
    compChoice(comp);
    calcWin(comp, player);
  });

  document.getElementById("PaperBtn").addEventListener("click", function(){
    player = 1;
    playerChoice(player);
    compChoice(comp);
    calcWin(comp, player);
  });

  document.getElementById("ScissorsBtn").addEventListener("click", function(){
    player = 2;
    playerChoice(player);
    compChoice(comp);
    calcWin(comp, player);
  });

  document.getElementById("ResetBtn").addEventListener("click", function(){
    playerCounter = 0;
    compCounter = 0;
    document.getElementById("pWins").innerHTML = playerCounter;
    document.getElementById("cWins").innerHTML = compCounter;
    document.getElementById("resultDisplay").innerHTML = "";
    document.getElementById("playerDisplay").innerHTML = "";
    document.getElementById("playerDisplay2").innerHTML = "";
    document.getElementById("compDisplay").innerHTML = "";
    document.getElementById("compDisplay2").innerHTML = "";
    document.getElementById("cText").innerHTML = "CPU is thinking...";
  });

  // Output player and computer choice back to the screen and define the values for calculation. 
  function playerChoice(player){
    switch(player) {
        case 0:
            document.getElementById("playerDisplay").innerHTML = "Rock!";
            document.getElementById("playerDisplay2").innerHTML = '<img src="img/rock.jpg" alt="Rock" width="200" height="200"></img>';
            break;
        case 1:
            document.getElementById("playerDisplay").innerHTML = "Paper!";
            document.getElementById("playerDisplay2").innerHTML = '<img src="img/paper.jpg" alt="Paper" width="200" height="200"></img>';
            break;
        case 2:
            document.getElementById("playerDisplay").innerHTML = "Scissors!";
            document.getElementById("playerDisplay2").innerHTML = '<img src="img/scissors.jpg" alt="Scissors" width="200" height="200"></img>';
        break;
  }
}
  
function compChoice(){
    // CPU will just pick  a random number from 0-2.
    comp = Math.floor(Math.random() * Math.floor(3));
    switch(comp) {
        case 0:
            document.getElementById("compDisplay").innerHTML = choices[comp];
            document.getElementById("cText").innerHTML = "CPU Chooses!";
            document.getElementById("compDisplay2").innerHTML = '<img src="img/rock.jpg" alt="Rock" width="200" height="200"></img>';
            break;
        case 1:
            document.getElementById("compDisplay").innerHTML = choices[comp];
            document.getElementById("cText").innerHTML = "CPU Chooses!";
            document.getElementById("compDisplay2").innerHTML = '<img src="img/paper.jpg" alt="Paper" width="200" height="200"></img>';
            break;
        case 2:
            document.getElementById("compDisplay").innerHTML = choices[comp];
            document.getElementById("cText").innerHTML = "CPU Chooses!";
            document.getElementById("compDisplay2").innerHTML = '<img src="img/scissors.jpg" alt="Scissors" width="200" height="200"></img>';
        break;
        }
    return comp;
}
    // Find the winner with a nested case statement.
  function calcWin(comp, player) {
    switch(player) {
        case 0:
           switch (comp) {
                case 0:
                    document.getElementById("resultDisplay").innerHTML = "You Tie!";  
                    break;
                case 1:
                    document.getElementById("resultDisplay").innerHTML = "You Lost!"; 
                    compCounter++; 
                    document.getElementById("cWins").innerHTML = compCounter;
                    break;
                case 2:
                    document.getElementById("resultDisplay").innerHTML = "You Win!"; 
                    playerCounter++; 
                    document.getElementById("pWins").innerHTML = playerCounter;
                    break;
           }
            break;
        case 1:
            switch (comp) {
                case 0:
                    document.getElementById("resultDisplay").innerHTML = "You Win!";  
                    playerCounter++; 
                    document.getElementById("pWins").innerHTML = playerCounter;
                    break;
                case 1:
                    document.getElementById("resultDisplay").innerHTML = "You Tie!"; 
                    break;
                case 2:
                    document.getElementById("resultDisplay").innerHTML = "You Lost!"; 
                    compCounter++; 
                    document.getElementById("cWins").innerHTML = compCounter;
                    break;
           }
            break;
        case 2:
            switch (comp) {
                case 0:
                    document.getElementById("resultDisplay").innerHTML = "You Lost!";  
                    compCounter++; 
                    document.getElementById("cWins").innerHTML = compCounter;
                    break;
                case 1:
                    document.getElementById("resultDisplay").innerHTML = "You Win!"; 
                    playerCounter++; 
                    document.getElementById("pWins").innerHTML = playerCounter;
                    break;
                case 2:
                    document.getElementById("resultDisplay").innerHTML = "You Tie!"; 
                    break;
           }
            break;
  }
}