'use-strict';

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click' , function() {
    const guess = Number(document.querySelector('.guess').value); 

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!' ;
    } else if (guess === secretNumber) {

        // when player wins
        document.querySelector('.message').textContent =
        'You mal naai, that is right!!!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        // set and save high score
        if (score> highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // guess to high
    } else if (guess > secretNumber) {
           if (score > 1) {
             document.querySelector('.message').textContent = 'Am I really that old?';
             score--;
             document.querySelector('.score').textContent = score;
           } else {
             document.querySelector('.message').textContent = 'Game Lost! Dom Naai!';
             document.querySelector('.score').textContent = 0;
           }
      
        // guess is low
         } else if (guess < secretNumber) {
           if (score > 1) {
             document.querySelector('.message').textContent = 'Do i really look that young?';
             score--;
             document.querySelector('.score').textContent = score;
           } else {
            document.querySelector('.message').textContent = 'Game Lost! Dom Naai!';
             document.querySelector('.score').textContent = 0;
           }
         }
   
});

document.querySelector('.again').addEventListener('click' , function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 50) + 2;
    document.querySelector('.message').textContent =
    'Start guessing bru...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
