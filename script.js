function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function singleRound(playerSelection, computerSelection) {

    playerSelection = capitalize(playerSelection);

    if ( (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') )  {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return 'You draw this round!';
    } else return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {

}