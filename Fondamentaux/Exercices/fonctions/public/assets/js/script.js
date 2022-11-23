
// Exercice 1
// Créer une fonction nommée "helloWorld" qui retourne
// Appeler cette fonction et afficher sa réponse dans la console.

function helloWorld() {
    return 'Bonjour tout le monde.'
};
console.log(helloWorld());

// Exercice 2
// Créer une fonction nommée "helloYou"
// qui attend un argument "firstname"
// Appeler cette fonction et
//  afficher une réponse dans la console du type "Bonjour Steve".

function helloYou(firstname) {
    return firstname;
};
let callFirstname = helloYou('Cyp');
console.log(`Bonjour ${callFirstname}`);


// Exercice 3 
// Une fonction de return rien
function average(nbr1, nbr2) {
    return ((nbr1 + nbr2) / 2);
};
let avg = average(2, 4);
console.log(`La moyenne se fait grâce aux deux nombres additionnés puis divisés par 2. Ce qui nous donne ${avg}`);


//  Exercice 4 
// Fonction fléchée 
// declaration variable
let mot = 'bonjour';
// declaration fonction = parametre => (return)
let word = (mot) => mot.length;
console.log(mot + word(mot));


//  Exercice 5 
function howAreYou(name) {
    return name;
};
console.log(`Bonjour, ${name} ! Comment vas-tu ?`);

// Exercice 6
//  Declaration des variables
let nbr1 = 2;
let nbr2 = 4;
let calc = nbr1 + nbr2;
// declaration fonction = parametre => (return)
let moy = (calc) => calc / 2;

console.log(`La moyenne se fait grâce aux deux nombres additionnés puis divisés par 2.
 Ce qui nous donne ${moy(calc)}`);

// En plus 

typeValue = (oui) => console.log(typeof (oui));
console.log(typeValue('oui'));
