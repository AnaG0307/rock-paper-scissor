// Variables to stablish the players, buttons with all answers to choose and outcome of the round

let playerAnswerArea = document.getElementsByClassName('player-answer')[0];
let computerAnswerArea = document.getElementsByClassName('computer-answer')[0];
let outcomeArea = document.getElementsByClassName('outcome-reaction');
let buttonsAnswers = document.querySelectorAll('button');
let playerAnswer = [
    'rock',
    'paper',
    'sicssors',
    'lizard',
    'spock'
];
let computerAnswer;

// Display answer from player once a button is clicked

buttonsAnswers.forEach(answer => answer.addEventListener('click', (occasion) => {
    console.log("Button clicked");
    playerAnswer = occasion.target.id;
    playerAnswerArea.innerText = playerAnswer;
    console.log(playerAnswer)
    createComputerAnswer()
}));

// Create answer from computer when player clicks and option

function createComputerAnswer() {
    let assignPosition = Math.floor(Math.random() * 5);
    if (assignPosition === 0) {
        computerAnswer = 'rock'
    };
    if (assignPosition === 1) {
        computerAnswer = 'paper'
    };
    if (assignPosition === 2) {
        computerAnswer = 'scissors'
    };
    if (assignPosition === 3) {
        computerAnswer = 'lizard'
    };
    if (assignPosition === 4) {
        computerAnswer = 'spock'
    };

    computerAnswerArea.innerText = computerAnswer;

    console.log(computerAnswer + playerAnswer)
    }

 
