const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const score = document.getElementById('score');
const gameOver = document.getElementById('gameover');
const startGame = document.getElementById('start');
console.log(gameOver);
// fonction jump qui ajoute ma class jump

// ===============================================
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

// appelle function jump 
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


// Start Game 
window.addEventListener("keydown", (start) => {
    // si code de la touche pressé == Space
    if (start.code == "Space") {
        startGame.style.display = "none";
        gameOver.style.display = "none";

        // ajouter l'animation au cactus
        cactus.style.animation = "block 1s infinite linear";

        // Score 
        intervalScore = setInterval(scoreCounter);
    }
})

// ===============================================


//  setinterval permet d'utiliser une fonction toutes les 10ms
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
        // collision
        // alert('gameover');

        //  SI CHIFUMI LOOOOSE
        // setTimeout(function () {
        //     gameOver.style.display = "none"
        //     startGame.style.display = "block";
        // }, 4000);
        // gameOver.style.display = "block";


        cactus.style.animation = "none";
        clearInterval(intervalScore);
        playerScore = 0;
    }

}, 10);





