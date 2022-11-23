// Exercice 1
console.log('EXERCICE 1');

let eleves = ['Tim', 'Bill', 'Jeff', 'Marc', 'Sundar'];
// .table affiche un tableau plus detaillé 
console.table(eleves);

// Exercice 2
console.log('EXERCICE 2');
console.log(eleves[3]);

// Exercice 3
console.log('EXERCICE 3');

eleves[3] = 'Mark';

console.log(eleves[3]);
eleves['length'];

// Exercice 4 
console.log('EXERCICE 4');
// .unshift ajoute l'élement au début du tableau
eleves.unshift('First');
eleves.push('Elon');
// console.log(eleves);
// Boucle pour parcourir le tableau 
for (let i = 0; i < eleves.length; i++) {
    console.log(eleves[i]);
}

// Exercice 5 
// sort tri mon tableau par ordre croissant ou alphabétique croissant
console.log('EXERCICE 5');

eleves.sort();
console.table(eleves)

