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

imagesPath = "assets/images/";
let gameImages = {
    rock: imagesPath + "rock.jpg",
    lizard: imagesPath + "lizard.jpg",
    paper: imagesPath + "paper.jpg",
    scissors: imagesPath + "scissor.jpg",
    spock: imagesPath + "spock.jpg"
};

// Create answer from player and show image for player and computer choices

buttonsAnswers.forEach(answer => answer.addEventListener('click', (occasion) => {
    playerAnswer = occasion.target.id;

    returnedAnswer = createComputerAnswer();

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
}

// Create answer from computer

function createComputerAnswer() {
    let assignPosition = Math.floor(Math.random() * 5);
    let answers = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return answers[assignPosition];
}

// Generate an outcome by comparing player and computer´s answers and add up score

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function roundOutcome() {
    let outcome;
        if (playerAnswer === returnedAnswer) {
        outcome = "Nobody wins, try again!";
        tieScore++;
    } else if ((playerAnswer === 'rock' && returnedAnswer === 'scissors') || (playerAnswer === 'rock' && returnedAnswer === 'lizard') || (playerAnswer === 'paper' && returnedAnswer === 'rock') || (playerAnswer === 'paper' && returnedAnswer === 'spock') || (playerAnswer === 'scissors' && returnedAnswer === 'paper') || (playerAnswer === 'scissors' && returnedAnswer === 'lizard') || (playerAnswer === 'lizard' && returnedAnswer === 'paper') || (playerAnswer === 'lizard' && returnedAnswer === 'spock') || (playerAnswer === 'spock' && returnedAnswer === 'rock') || (playerAnswer === 'spock' && returnedAnswer === 'scissors')) {
        outcome = "You win!";
        playerScore++;
    } else if ((playerAnswer === 'rock' && returnedAnswer === 'paper') || (playerAnswer === 'rock' && returnedAnswer === 'spock') || (playerAnswer === 'paper' && returnedAnswer === 'scissors') || (playerAnswer === 'paper' && returnedAnswer === 'lizard') || (playerAnswer === 'scissors' && returnedAnswer === 'rock') || (playerAnswer === 'scissors' && returnedAnswer === 'spock') || (playerAnswer === 'lizard' && returnedAnswer === 'rock') || (playerAnswer === 'lizard' && returnedAnswer === 'scissors') || (playerAnswer === 'spock' && returnedAnswer === 'paper') || (playerAnswer === 'spock' && returnedAnswer === 'lizard')) {
        outcome = "You lost!";
        computerScore++;
    }
    document.getElementById("outcome-reaction").innerHTML = outcome;
    document.getElementById('p-score').innerHTML = playerScore;
    document.getElementById('c-score').innerHTML = computerScore;
    document.getElementById('t-score').innerHTML = tieScore;
}
