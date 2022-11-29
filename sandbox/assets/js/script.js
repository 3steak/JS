
// let buttons = document.querySelectorAll('.btn');
// A METTRE PLUS TARD, Reset des compteurs
// let replay = document.querySelector('.replay');
// buttons.forEach((button) => {
//     let buttonValue = Number(button.value);
//     console.log(buttonValue)
// })

const paperNode = document.querySelector('.paper');
const scissorsNode = document.querySelector('.scissors');
const rockNode = document.querySelector('.rock');
const computeurChoiceNode = document.querySelector('.computeurChoice');
const yourChoiceNode = document.querySelector('.yourChoice');
const resultNode = document.querySelector('.result');

const paper = 0;
const scissors = 1;
const rock = 2;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// mon tableau a donc pour index 0 la key paper etc.. 
const choiceToText = ['Paper', 'Scissors', 'Rock'];

paperNode.addEventListener('click', () => {
    // je définis ma variable qui me donnera un entier random
    let computeur = getRandomInt(3);

    // computeur vient jouer sur mon index du tableau
    //  il fait alors référence à paper scissors ou rock
    computeurChoiceNode.textContent = choiceToText[computeur];
    yourChoiceNode.textContent = choiceToText[paperNode.value];

    if (computeur === rock) {
        resultNode.textContent = 'WINNER'
    } else if
        (computeur === paper) {
        resultNode.textContent = " EGALITY"
    } else {
        resultNode.textContent = "LOOSER"
    }
})


scissorsNode.addEventListener('click', () => {
    let computeur = getRandomInt(3);
    // computeur vient jouer sur mon index du tableau
    //  il fait alors référence à paper scissors ou rock
    computeurChoiceNode.textContent = choiceToText[computeur];
    yourChoiceNode.textContent = choiceToText[scissorsNode.value];
    if (computeur === rock) {
        resultNode.textContent = "LOOSER"
    } else if
        (computeur === paper) {
        resultNode.textContent = 'WINNER'
    } else {
        resultNode.textContent = " EGALITY"
    }
})


rockNode.addEventListener('click', () => {
    let computeur = getRandomInt(3);

    // computeur vient jouer sur mon index du tableau
    //  il fait alors référence à paper scissors ou rock
    computeurChoiceNode.textContent = choiceToText[computeur];
    yourChoiceNode.textContent = choiceToText[rockNode.value];
    if (computeur === rock) {
        resultNode.textContent = " EGALITY"
    } else if
        (computeur === paper) {
        resultNode.textContent = "LOOSER"
    } else {
        resultNode.textContent = 'WINNER'
    }

})


