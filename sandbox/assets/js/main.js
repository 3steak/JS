const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

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
        alert('gameover');
    }

}, 10);

document.addEventListener('keydown', (event) => {
    jump();
})