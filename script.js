'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Nema broja!🤣';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Tačan Broj!👏';

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //previse velik broj
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Visok broj🛩';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    } else {
      document.querySelector('.message').textContent = 'Game over!!!❤';
      document.querySelector('.score').textContent = 0;
    }

    //to low number
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Nizak broj!🤦‍♀️';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
    if (score > 1) {
      document.querySelector('.message').textContent = 'Nizak broj!!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over!!!❤';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//challange//

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Pocni sa pogađanjem...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
