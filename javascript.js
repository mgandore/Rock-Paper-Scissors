console.log('hello world');
let playerScore = 0,
    computerScore = 0;

const div = document.querySelector('div.score');
const winnerMsg = document.querySelector('div.outcome');


const btns = document.querySelectorAll('#btn');
btns.forEach(btn =>{
    btn.addEventListener('click', playerPick);
    btn.addEventListener('click', playRound); 
});

const resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', playAgain);

function computerPick() {
    const computerChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random];
}

function playerPick(e) {
    let playerChoice = e.target.value;
    //let playerChoice = e.target.textContent; this way works too
    return playerChoice.toUpperCase();
}
  
function playRound(e) {
    let result;
    let computerSelection = computerPick();
    let playerSelection = playerPick(e);
    if( computerSelection == 'ROCK' && playerSelection == 'SCISSORS' || computerSelection == 'PAPER' && playerSelection == 'ROCK' ||
            computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
        result = 'You lose! ROCK beats SCISSORS';
        computerScore ++;
    } else if ( computerSelection == 'ROCK' && playerSelection == 'PAPER' || computerSelection == 'PAPER' && playerSelection == 'SCISSORS' ||
            computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
        result = 'You win! PAPER beats ROCK';
        playerScore ++;
    } else if ( computerSelection == 'ROCK' && playerSelection == 'ROCK' || computerSelection == 'PAPER' && playerSelection == 'PAPER' ||
            computerSelection == 'SCISSORS' && playerSelection == 'SCISSORS') {
        result = 'Tie!'; 
        playerScore ++;
        computerScore ++;
    }
    checkScore();
}

function checkScore() {
    div.textContent = `Player ${playerScore}  -  ${computerScore} Computer`;

    if (playerScore === 5 && computerScore === playerScore){
        div.textContent = `Player ${playerScore}  -  ${computerScore} Computer`;
        winnerMsg.textContent = ' It\'s Tie. Deathmatch begins!!!';
    } else if (playerScore >= 5) {
        div.textContent = `Player ${playerScore}  -  ${computerScore} Computer`;
        winnerMsg.textContent = 'You win !!!';
        btns.forEach(btn => {
            btn.removeEventListener('click',playRound);
            btn.removeEventListener('click',playerPick);
        });
    } else if (computerScore >= 5) {
        div.textContent = `Player ${playerScore}  -  ${computerScore} Computer`;
        winnerMsg.textContent = 'Computer win!!!';
        btns.forEach(btn => {
            btn.removeEventListener('click',playRound);
            btn.removeEventListener('click',playerPick);
        });
    } 
}

function playAgain(e){
    playerScore = 0;
    computerScore = 0;
    div.textContent = `Player ${playerScore}  -  ${computerScore} Computer`;
    winnerMsg.textContent = '';
    btns.forEach(btn =>{
        btn.addEventListener('click', playerPick);
        btn.addEventListener('click', playRound);
    });
}