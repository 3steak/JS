// Exercice 1

let eleves = ['Tim', 'Bill', 'Jeff', 'Marc', 'Sundar'];
console.log(eleves);

// Exercice 2

console.log(eleves[3]);

// Exercice 3

eleves[3] = 'Mark';
console.log(eleves[3]);
eleves['length'];

// Exercice 4 
eleves.push('Elon');
// console.log(eleves);
// Boucle pour parcourir le tableau 
for (let i = 0; i < eleves.length; i++) {
    console.log(eleves[i]);
}

// Exercice 5 
// sort tri mon tableau par ordre croissant ou alphabétique croissant
eleves.sort();
console.log(eleves)

