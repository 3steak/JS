const game = document.querySelector('.game');
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const score = document.getElementById('score');
const gameOver = document.getElementById('gameover');
const startGame = document.getElementById('start');

// ===============================================
// fonction jump qui ajoute ma class jump

function jump() {
    // si if = false ne reset pas le jump
    if (dino.classList != "jump") {
        dino.classList.add('jump');

        setTimeout(function () {
            dino.classList.remove("jump")
        }, 300);
    }
}

// ===============================================

// Appelle function jump 
document.addEventListener('keydown', (event) => {
    jump();
})

// ===============================================


// Variable score
let interval = null;
let playerScore = 0;


// ===============================================


// fonction score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score :${playerScore}`;
}

// ===============================================

// Ajout listener sur keydown
window.addEventListener("keydown", startanimation);


// ===============================================


// function StartGame()
function startanimation(start) {

    // si code de la touche pressé == Enter
    if (start.code == "Enter") {
        startGame.style.display = "none";
        gameOver.style.display = "none";

        // ajouter l'animation au cactus
        cactus.style.animation = "block 1s infinite linear";
        window.removeEventListener("keydown", startanimation);

        // Score 
        // Incremente mon playerScore grace fonction ligne 41
        intervalScore = setInterval(scoreCounter);
    }
}


// ===============================================


// Function stopGame 
function stopGame(stop) {

    setTimeout(function () {
        chifumi.style.display = "none";
        game.style.display = "block";
        gameOver.style.display = "block";
    }, 2000);
    setTimeout(function () {
        gameOver.style.display = "none"
        startGame.style.display = "block";
        playerScore = 0;
        window.addEventListener("keydown", startanimation);
        resultNode.textContent = '';
        computeurChoiceNode.textContent = '';
        yourChoiceNode.textContent = '';
    }, 4000);
}


// ===============================================

function continueGame(glhf) {
    setTimeout(function () {
        chifumi.style.display = "none";
        game.style.display = "block";
        cactus.style.animation = "block 1s infinite linear";
        resultNode.textContent = '';
        computeurChoiceNode.textContent = '';
        yourChoiceNode.textContent = '';

        // je reprends mon incrémentation
        intervalScore = setInterval(scoreCounter);
    }, 4000);
};


// ===============================================


//  setinterval permet d'utiliser une fonction, ici toutes les 10ms
let isAlive = setInterval(function () {
    // recup position y du dino
    // getcomputeurstyle return toute les valeurs css
    // get propertyValue return la valeur du css ciblé
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // recup position left de notre block cactus
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    // detect collision 
    //  si cactuleft est à gauche ( entre 0 et 50px) et dinoTop plus bas que 140px ===> Collision
    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140) {
        setTimeout(function () {
            // Si collision
            chifumi.style.display = "flex";
            game.style.display = "none";
        }, 1000);


        cactus.style.animation = "none";

        // Stop incrémentation
        clearInterval(intervalScore);

    }

}, 10);



//  ---------------------CHIFUMI -------------------------



const paperNode = document.querySelector('.paper');
const scissorsNode = document.querySelector('.scissors');
const rockNode = document.querySelector('.rock');
const computeurChoiceNode = document.querySelector('.computeurChoice');
const yourChoiceNode = document.querySelector('.yourChoice');
const resultNode = document.querySelector('.result');
const chifumi = document.querySelector('.chifumi');

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

        resultNode.textContent = 'TU CONTINUES ! ';
        continueGame();

    } else if (computeur === paper) {

        resultNode.textContent = "EGALITE, REJOUONS !";

    } else {

        resultNode.textContent = "GAME OVER !";
        stopGame();
    }
})


scissorsNode.addEventListener('click', () => {
    let computeur = getRandomInt(3);
    // computeur vient jouer sur mon index du tableau
    //  il fait alors référence à paper scissors ou rock
    computeurChoiceNode.textContent = choiceToText[computeur];
    yourChoiceNode.textContent = choiceToText[scissorsNode.value];

    if (computeur === rock) {

        resultNode.textContent = "GAME OVER !"
        stopGame();

    } else if (computeur === paper) {

        resultNode.textContent = 'TU CONTINUES !'
        continueGame();

    } else {

        resultNode.textContent = "EGALITE, REJOUONS !"
    }
})


rockNode.addEventListener('click', () => {
    let computeur = getRandomInt(3);

    // computeur vient jouer sur mon index du tableau
    //  il fait alors référence à paper scissors ou rock
    computeurChoiceNode.textContent = choiceToText[computeur];
    yourChoiceNode.textContent = choiceToText[rockNode.value];

    if (computeur === rock) {

        resultNode.textContent = "EGALITE, REJOUONS !"

    } else if (computeur === paper) {

        resultNode.textContent = "GAME OVER !"
        stopGame();

    } else {

        resultNode.textContent = 'TU CONTINUES ! '
        continueGame();
    }

})

