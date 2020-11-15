'use strict';

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

const selectors = {
    msg: document.querySelector('.message'),
    guess: document.querySelector('.guess'),
    number: document.querySelector('.number'),
    check: document.querySelector('.check'),
    score: document.querySelector('.score'),
}

// generating random number 1 - 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

selectors.number.textContent = secretNumber;
selectors.check.addEventListener('click', function() {

    // retrieving the guess from the user input
    const guess = Number(selectors.guess.value);

    // validating there was a guess
    if (!guess) {
        selectors.msg.textContent = "🛑 Please Enter a number!";
    } else if (guess === secretNumber) {
        selectors.msg.textContent = '🥳 Correct Number!';
    } else if (guess > secretNumber) {

        if (score > 1) {
            selectors.msg.textContent = '📈 Too high!';
            score--;
            selectors.score.textContent = score;
        } else {
            selectors.msg.textContent = '😞 You lost the game!';
            selectors.score.textContent = 0;
        }

    } else if (guess < secretNumber) {

        if (score > 1) {
            selectors.msg.textContent = '📉 Too low!';
            score--;
            selectors.score.textContent = score;
        } else {
            selectors.msg.textContent = '😞 You lost the game!';
            selectors.score.textContent = 0;
        }
    }

});