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

let mark = 2;

switch (mark) {
    case ((mark > 0) && (mark < 3)):
        console.log("Mauvais");
        break;
    case ((mark > 4) && (mark < 5)):
        console.log("Moyen");
        break;
    case ((mark > 6) && (mark < 7)):
        console.log("Assez Bien");
        break;
    case ((mark > 8) && (mark < 9)):
        console.log("Bien");
        break;
    default:
        console.log("Excellent");
};


