// Exercice 1
console.log('EXERCICE 1');

for (let i = 2020; i <= 2030; i++) {
    console.log(i);
}

// Exercice 2 
console.log('EXERCICE 2');

let j = 0;
for (let j = 0; j <= 100; j++) {
    if (((j % 7) == 0) && (j != 0)) {
        console.log(`${j} est un multiple de 7`);
    } else {
        console.log(j);
    }
};


// Exercice 3
console.log('EXERCICE 3');
const languages = ['Javascript', 'Python', 'PHP', 'Java', 'SQL'];

for (let l = 0; l <= 4; l++) {
    console.log(languages[l])
};
// Exercice 4
console.log('EXERCICE 4');

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

for (let f = 1; f <= 7; f++) {
    // f s'affiche de 1 jusqu'a 7 et days[f-1] pour récupérer mes indexes du tableau days
    console.log(f + ': ' + days[f - 1])
}

// Exercice 5

console.log('EXERCICE 5');

let day = 20;
// do {
//     console.log(`Jour ${j} de l'année`)
//     j += 1;
// } while (j <= 20);

while (j < 20) {
    console.log(`Jour ${j} de l'année`)
    j += 1;
    if (j == 20) {
        console.log(`Jour ${j} atteint`)
    }
};

// Exercice 6 
console.log('EXERCICE 6');

let firstNumber = 2;
let secondNumber = 8;

while (secondNumber < 250) {
    console.log(secondNumber);
    secondNumber = firstNumber * secondNumber
}





