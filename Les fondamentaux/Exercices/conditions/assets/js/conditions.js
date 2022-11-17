// Exercice 1

let age = 27;
if (age > 18) {
    console.log('Vous êtes majeur.')
} else {
    console.log('Vous êtes mineur.')
};

// Exercice 2 

let num = 10;
if (10 % num == 0) {
    console.log('Le nombre est pair')
} else {
    console.log('Le nombre est impair.')
};

// Exercice 3 

let mark = 4;

if ((mark >= 0) && (mark <= 3)) {
    console.log('Mauvais');
} else if ((mark >= 4) && (mark <= 5)) {
    console.log('Moyen');
} else if ((mark >= 6) && (mark <= 7)) {
    console.log('Assez Bien');
} else if ((mark >= 8) && (mark <= 9)) {
    console.log('Bien');
} else {
    console.log('Excellent');
};

//  Avec SWITCH ( opérateurs de comparaison non valide)
// switch (mark) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//         console.log("Mauvais");
//         break;
//     case 4:
//     case 5:
//         console.log("Moyen");
//         break;
//     case 6:
//     case 7:
//         console.log("Assez Bien");
//         break;
//     case 8:
//     case 9:
//         console.log("Bien");
//         break;
//     default:
//         console.log("Excellent");
// };

// Exercice 4 
let day = 4;

switch (day) {

    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Ventredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
};


// Exercice 5 
let value = [1, 2, 3];
console.log('La valeur entrée est un(e) ' + typeof (value));

console.log(document.querySelector('#text'));
console.log(typeof (window));

