function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function singleRound(playerSelection, computerSelection) {

    if ( (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') )  {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return 'You draw this round!';
    } else return `You lose! ${computerSelection} beats ${playerSelection}`;

}

function game() {

    let computerSelection, playerSelection;
    let roundResult;
    let playerScore = 0, computerScore = 0;
    let options = ['Rock', 'Paper', 'Scissors'];
    for (let i = 1; i <= 5; i ++) {
        computerSelection = computerPlay();
        playerSelection = prompt('What would you like to choose this round?');
        playerSelection = capitalize(playerSelection);
        if ( !(options.includes(playerSelection)) ) {
            console.log('Invalid input!');
        } else {
            roundResult = singleRound(playerSelection, computerSelection);
            if (roundResult === `You win! ${playerSelection} beats ${computerSelection}`) {
                playerScore++;
            } else if (roundResult === `You lose! ${computerSelection} beats ${playerSelection}`) {
                computerScore++;
            }
            console.log(roundResult);
            console.log(`Player ${playerScore} : ${computerScore} Computer`);
        }
    }

    console.log(`The final score is ${playerScore} : ${computerScore}`)
    if (playerScore > computerScore) {
        console.log('Player wins!');
    } else if (playerScore < computerScore) {
        console.log('Computer wins!');
    } else console.log('The game ended in a draw!');

}