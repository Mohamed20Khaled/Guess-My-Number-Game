'use strict';

let number = Math.trunc(Math.random() * 20) + 1; //random num from 1 to 20 with trunc decimal values
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }

  //when player wins
  else if (guess == number) {
    displayMessage('👌Correct Number!');
    document.querySelector('.number').textContent = number;
    //to change bgcolor to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //to change width
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when the guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
