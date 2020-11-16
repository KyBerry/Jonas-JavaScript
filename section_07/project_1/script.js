"use strict";

/*
    // Selecting an element using javascript
    console.log(document.querySelector('.message').textContent);
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    console.log(document.querySelector('.message').textContent);

    // Selecting number and score from the DOM
    document.querySelector('.number').textContent = 13;
    document.querySelector('.score').textContent = 10;

    // Selecting the input field | getting the value of the input | setting the value
    document.querySelector('.guess').value = 23;
    console.log(document.querySelector('.guess').value);
*/

/*
    Adding an event listener to the button element
    Using the addEventListener() method
    First argument is a <event to listen for>
    Second argument is <function that does some action> (the event handler)
*/

// list of dom selectors
const selectors = {
  msg: document.querySelector(".message"),
  again: document.querySelector(".again"),
  guess: document.querySelector(".guess"),
  number: document.querySelector(".number"),
  check: document.querySelector(".check"),
  score: document.querySelector(".score"),
  highScore: document.querySelector(".highscore"),
  body: document.querySelector("body"),
};

// generating random number 1 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// display game message function
const displayMessage = function (message) {
  selectors.msg.textContent = message;
};

selectors.check.addEventListener("click", function () {
  // retrieving the guess from the user input
  const guess = Number(selectors.guess.value);

  // validating there was a guess / input
  if (!guess) {
    displayMessage("🛑 Please Enter a number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct Number!");
    selectors.number.textContent = secretNumber;
    selectors.body.style.backgroundColor = "#60b347";

    // Setting and comparing highscore
    if (score > highScore) {
      highScore = score;
      selectors.highScore.textContent = highScore;
    }

    // When a player's guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      selectors.score.textContent = score;
    } else {
      displayMessage("😞 You lost the game!");
      selectors.score.textContent = 0;
    }
  }
});

/*
    Coding Challenge #1

    Implement a game rest functionality, so that the player
    can make a new guess! Here is how:
 */

// Click event for play again button
selectors.again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  selectors.msg.textContent = "Start guessing...";
  selectors.body.style.backgroundColor = "#333";
  selectors.score.textContent = 20;
  selectors.guess.value = "";
  selectors.number.textContent = "?";
});
