
// Exercice 1
// Créer une fonction nommée "helloWorld" qui retourne
"Bonjour tout le monde"
// Appeler cette fonction et afficher sa réponse dans la console.

function helloWorld() {
    return console.log('Bonjour tout le monde.')
};

// Exercice 2
// Créer une fonction nommée "helloYou"
// qui attend un argument "firstname"
// Appeler cette fonction et
//  afficher une réponse dans la console du type "Bonjour Steve".

let firstname = "Benur";
function helloYou(firstname) {
    return console.log('Bonjour ' + firstname)
};

// Exercice 3 

let nbr1 = 2;
let nbr2 = 4;

function average(nbr1, nbr2) {
    return console.log(`La moyenne se fait grâce à nbr1 + nbr2 divisé par 2. Ce qui nous donne ` + ((nbr1 + nbr2) / 2));
}
