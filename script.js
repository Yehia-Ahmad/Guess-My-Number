/*
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
      console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number!'
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highscore){
            highscore=score
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent = guess > secretNumber?'📈 Too high!' : '📉 Too low!'
        score--;
        document.querySelector('.score').textContent = score
        } else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = score;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    let secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector(' body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'start guessing...'
    document.querySelector('.guess').value = ' ';
})
*/

let secretScore = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click' , function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);
    if (!guess){
        document.querySelector('.message').textContent = '⛔️ No number!';
    } else if ( guess === secretScore){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = ' #60b347 ';
        document.querySelector('.number').textContent = secretScore ;
        if (score > highScore){
            document.querySelector('.highscore').textContent = score;
        }
    } else if ( guess !== secretScore){
        if (score > 1){
            document.querySelector('.message').textContent = guess > secretScore ? '📈 Too high!' : '📉 Too low!'
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('body').style.backgroundColor = '#C00000';
            document.querySelector('.score').textContent = 0;
        }
    }
})
document.querySelector('.again').addEventListener('click' , function(){
    secretScore = Number(Math.trunc(Math.random()*20) + 1);
    score = 20
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
})