//------------------  HOME -------------

const home = document.querySelector('.home');
const play = document.querySelector('.play_btn');

play.addEventListener('click', (playgame) => {
    setTimeout(function () {
        home.style.display = 'none';
        game.style.display = 'block';
    }, 300);
})

// ----------- MAIN GAME --------------

const game = document.querySelector('.game');
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const enemy = document.getElementById('enemy');
const score = document.getElementById('score');
const gameOver = document.getElementById('gameover');
const startGame = document.getElementById('start');
const monster = document.querySelector('.monster');

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
document.addEventListener("keydown", (event) => {
    jump();
})
document.addEventListener("touchstart", (touch) => {
    jump();
})
// ===============================================


// ============     Variable et fonction score      ===================
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score :${playerScore}`;
}


// ===============================================


// Ajout listener sur keydown et touchEvent (mobile) qui attende la fonction startanimation
window.addEventListener("keydown", startanimation);
window.addEventListener("touchstart", startanimation);


// ===============================================

// function StartGame()
function startanimation(start) {
    console.log(start.TouchList);
    // si code de la touche pressé == Enter
    //  ajouter TouchList pour start sur mobile
    if (start.code == "Enter") {
        startGame.style.display = "none";
        gameOver.style.display = "none";

        // ajouter l'animation au cactus
        cactus.style.animation = "block 1s infinite linear";
        window.removeEventListener("keydown", startanimation);
        window.removeEventListener("touchstart", startanimation);
        // ajout rocket apres X ms second
        setTimeout(function () {
            // enemy.style.animation = "rocket 1s infinite linear";

        }, 5000);
        // Score 
        // Incremente mon playerScore grace fonction ligne 41
        intervalScore = setInterval(scoreCounter);
    }
}


// ===============================================


// Function stopGame 
function stopGame(stop) {
    monster.classList.add('flicker-out-1');
    chifumi.classList.add("red");
    setTimeout(function () {
        chifumi.classList.add("slide-out-elliptic-top-bck");
    }, 2000);
    setTimeout(function () {
        chifumi.style.display = "none";
        game.style.display = "block";
        gameOver.style.display = "block";
    }, 2500);
    setTimeout(function () {
        gameOver.style.display = "none"
        startGame.style.display = "block";
        playerScore = 0;
        window.addEventListener("keydown", startanimation);
        window.addEventListener("touchstart", startanimation);
        resultNode.textContent = '';
        computeurChoiceNode.textContent = '';
        yourChoiceNode.textContent = '';
        chifumi.classList.remove("slide-out-elliptic-top-bck");
        monster.classList.remove('flicker-out-1');
        chifumi.classList.remove("red");
    }, 3500);
}


// ===============================================

//  Function continueGame
function continueGame(glhf) {
    monster.classList.add('flicker-out-1');
    chifumi.classList.add("green");
    setTimeout(function () {
        chifumi.classList.add("slide-out-elliptic-top-bck");
    }, 2000);
    setTimeout(function () {
        chifumi.style.display = "none";
        game.style.display = "block";
        cactus.style.animation = "block 1s infinite linear";
        // enemy.style.animation = "block 1s infinite linear";
        resultNode.textContent = '';
        computeurChoiceNode.textContent = '';
        yourChoiceNode.textContent = '';
        chifumi.classList.remove("slide-out-elliptic-top-bck");
        monster.classList.remove('flicker-out-1');
        chifumi.classList.remove("green");
        // je reprends mon incrémentation
        intervalScore = setInterval(scoreCounter);
    }, 3500);
};


// ===============================================

//  COLLISION

//  setinterval permet d'utiliser une fonction, ici toutes les 10ms
setInterval(function () {
    // recup position y du dino
    // getcomputeurstyle return toutes les valeurs css
    // get propertyValue return la valeur du css ciblé
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // recup position left de notre block cactus
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));


    // let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));


    // detect collision 
    //  si cactuleft est à gauche ( entre 0 et 50px) et dinoTop plus bas que 140px ===> Collision
    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140) {
        dino.style.backgroundImage = "url(/assets/img/explosion2.gif)";
        setTimeout(function () {
            // Si collision
            chifumi.style.display = "flex";
            game.style.display = "none";
            dino.style.backgroundImage = "url(/assets/img/vaisseau1.gif)";
        }, 1000);

        cactus.style.animation = "none";
        enemy.style.animation = "none";

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

// mon tableau a donc pour index 0 la key Feu etc.. 
const choiceToText = ['Feu', 'Eau', 'Plante'];


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
        chifumi.classList.add("blue");
        resultNode.textContent = "EGALITE, REJOUONS !";
        setTimeout(function () {
            chifumi.classList.remove("blue");
        }, 1500);
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
        chifumi.classList.add("blue");
        resultNode.textContent = "EGALITE, REJOUONS !"
        setTimeout(function () {
            chifumi.classList.remove("blue");
        }, 1500);
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
        chifumi.classList.add("blue");
        setTimeout(function () {
            chifumi.classList.remove("blue");
        }, 1500);


    } else if (computeur === paper) {

        resultNode.textContent = "GAME OVER !"
        stopGame();

    } else {

        resultNode.textContent = 'TU CONTINUES ! '
        continueGame();
    }

})

