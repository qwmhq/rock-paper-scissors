let playerScore = 0, computerScore = 0;

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    if ( (playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') )  {
        return 'win';
    } else if (playerSelection === computerSelection) {
        return 'draw';
    } else return 'lose';

}

function optionClick(e) {
    let playerSelection = e.target.textContent;
    let computerSelection = computerPlay();
    roundResult = playRound(playerSelection, computerSelection);
    if (roundResult  === 'win') {
        playerScore++;
        commentary.textContent = `${playerSelection} beats ${computerSelection}, you win!`;
    } else if (roundResult === 'lose') {
        computerScore++;
        commentary.textContent = `${computerSelection} beats ${playerSelection}, you lose!`;
    } else {
        commentary.textContent = 'it\'s a tie';
    }
    scoreboard.textContent = `player ${playerScore} : ${computerScore} computer`;

    if (playerScore === 5) {
        commentary.textContent = 'You win!';
        displayRestartButton();
    } else if (computerScore === 5) {
        commentary.textContent = 'You lose!';
        displayRestartButton();
    }
}

function displayRestartButton() {
    options.forEach((option) => option.style.display = 'none');
    restartButton.style.display = 'block';
    
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreboard.textContent = `player ${playerScore} : ${computerScore} computer`;
    restartButton.style.display = 'none';
    options.forEach((option) => option.style.display = 'inline');
    commentary.textContent = '';
}

const container = document.querySelector('.container');
const scoreboard = document.querySelector('div[class="scoreboard"');
const commentary = document.querySelector('div[class="commentary"]');
const options = document.querySelectorAll('button[class="option"]');
options.forEach((option) => option.addEventListener('click', optionClick));
const restartButton = document.createElement('button');
restartButton.textContent = 'restart game';
restartButton.addEventListener('click', restartGame);
restartButton.style.display = 'none';
container.appendChild(restartButton);