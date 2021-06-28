// Variables to stablish the players, buttons with all answers to choose and outcome of the round

let playerAnswerArea = document.getElementsByClassName('player-answer')[0];
let playerImageArea = document.getElementsByClassName('player-answer-img')[0];

let computerAnswerArea = document.getElementsByClassName('computer-answer')[0];
let computerImageArea = document.getElementsByClassName('computer-answer-img')[0];

let buttonsAnswers = document.querySelectorAll('button');
let playerAnswer = [
    'rock',
    'paper',
    'sicssors',
    'lizard',
    'spock'
];

imagesPath = "assets/images/"

let gameImages = {
    rock : imagesPath + "rock.jpg", 
    lizard : imagesPath + "lizard.jpg",
    paper : imagesPath + "paper.jpg",
    scissors : imagesPath + "scissor.jpg",
    spock : imagesPath + "spock.jpg"
    };

// Create answer from player and show image for player and computer choices


buttonsAnswers.forEach(answer => answer.addEventListener('click', (occasion) => {
    playerAnswer = occasion.target.id;

    returnedAnswer = createComputerAnswer();

    let returnedPlayerImage =  getImage(playerAnswer);
    playerAnswerArea.innerText = playerAnswer;  
    playerImage = getImage(playerAnswer);

    computerImage = getImage(returnedAnswer);

    playerImageArea.src = getImage(playerAnswer);
    computerImageArea.src = getImage(returnedAnswer);

    computerAnswerArea.innerText = returnedAnswer;
    roundOutcome();
}));

function getImage(playerAnswer) {
    return gameImages[playerAnswer];
};

// Create answer from computer

function createComputerAnswer() {
    let assignPosition = Math.floor(Math.random() * 5);
    let answers = ['rock','paper','scissors','lizard','spock'];
    return answers[assignPosition];
};


// Generate an outcome by comparing player and computer´s answers

function roundOutcome() {
    if (playerAnswer === returnedAnswer) {
        outcome = "Nobody wins, try again!"
    };
    if (playerAnswer === 'rock' && returnedAnswer === 'paper') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'rock' && returnedAnswer === 'scissors') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'rock' && returnedAnswer === 'lizard') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'rock' && returnedAnswer === 'spock') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'paper' && returnedAnswer === 'rock') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'paper' && returnedAnswer === 'scissors') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'paper' && returnedAnswer === 'lizard') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'paper' && returnedAnswer === 'spock') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'scissors' && returnedAnswer === 'rock') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'scissors' && returnedAnswer === 'paper') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'scissors' && returnedAnswer === 'lizard') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'scissors' && returnedAnswer === 'spock') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'lizard' && returnedAnswer === 'rock') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'lizard' && returnedAnswer === 'paper') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'lizard' && returnedAnswer === 'scissors') {
        outcome = 'You lost!'
    };
    if (playerAnswer === 'lizard' && returnedAnswer === 'spock') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'spock' && returnedAnswer === 'rock') {
        outcome = 'You win!'
    };
    if (playerAnswer === 'spock' && returnedAnswer === 'paper') {
        outcome = 'You lost!';
    };
    if (playerAnswer === 'spock' && returnedAnswer === 'scissors') {
        outcome = 'You win!';
    };
    if (playerAnswer === 'spock' && returnedAnswer === 'lizard') {
        outcome = 'You lost!';
    };
    
    document.getElementById("outcome-reaction").innerHTML = outcome;
    console.log(outcome);
}

