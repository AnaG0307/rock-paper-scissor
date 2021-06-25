// Variables to stablish the players, buttons with all answers to choose and outcome of the round

let playerAnswerArea = document.getElementsByClassName('player-answer')[0];
let playerImageArea = document.getElementsByClassName('player-answer-img')[0];

let computerAnswerArea = document.getElementsByClassName('computer-answer')[0];
let computerImageArea = document.getElementsByClassName('computer-answer-img')[0];

let outcomeArea = document.getElementsByClassName('outcome-reaction');
let buttonsAnswers = document.querySelectorAll('button');
let playerAnswer = [
    'rock',
    'paper',
    'sicssors',
    'lizard',
    'spock'
];

let gameImages = [{
    answer: 'rock',
    path: "../images/rock.png"
}, {
    answer: 'lizard',
    path: "../images/lizard.png"
}, {
    answer: 'paper',
    path: '../images/paper.png'
}, {
    answer: 'scissors',
    path: '../images/scissors.png'
}, {
    answer: 'spock',
    path: '../images/spock.png'
}
];

// Display answer from player once a button is clicked

buttonsAnswers.forEach(answer => answer.addEventListener('click', (occasion) => {
    playerAnswer = occasion.target.id;

    // Call function that returns computer answer and store it in returnedAnswer
    returnedAnswer = createComputerAnswer();


    // STEP TWO:
    

    let returnedPlayerImage = // call the getImage function and pass the playerAnswer into it as an argument and storing the return in a variable

    // STEP THREE:
    // you'll need to write a second function to filter the image path against the computer answer
    // once again calling that function and passing in the returnedAnswer (the computer answer)

    playerAnswerArea.innerText = playerAnswer;  
    // STEP FOUR:
    // now using the setAttribute() method you can target the <img> element and set the 'src' attribute to returnedPlayerImage which you've set on line 49

    computerAnswerArea.innerText = returnedAnswer;

}));

// // Display answer image from player selection

// >>>> STEP ONE:
// >>>> Write a function that takes an argument, I've started it below for you
// >>>> Inside this function you filter the playerAnswer against the key of answer and it's value in each 
// >>>> I've called the argument, argument but based on what you need to pass in from STEP TWO (see above) you need to name it accordingly

function getImage(argument) {
    // >>>>> You are on the right track with WAY2
    //WAY2

    // in this function you'll need to run the filter and then return the data that you store in the variable, currently named imagePlayer
    // each object in the array has 2 keys, answer and path, we want to compare answer to the argument (which should be the playerAnswer)
    let imagePlayer = gameImages.filter(image => image.answer === argument);
    // remember that it will return an object from the gameImages array
    // In that array we have 2 keys, answer and path, both with their own values, we want to target the first object returned in the imagePlayer variable
    // and we want to return the first value stored at the key, path, in that object:
    console.log(imagePlayer[0].path[0])
}



// //WAY1
// for (let i = 0; i < gameImages.length; i++) {
//     if (answer[i].path === playerAnswer){
//         gameImages.push(answer[i]);
//     }
// }
// console.log(gameImages);

// //WAY3
// var imagePlayer = gameImages.filter(function(e) {
//     return e.answer == playerAnswer;
// })
// console.log(imagePlayer);


// Create answer from computer when player clicks and option

function createComputerAnswer() {

    let assignPosition = Math.floor(Math.random() * 5);
    let computerAnswer;

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

    return computerAnswer;
}
