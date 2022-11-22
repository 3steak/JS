// Exercice 1
let user1 = {
    lastname: 'Musk',
    firstname: 'Elon',
    age: '51',
    phone: '0422521010',
    birthdate: '1971-06-28'
}
console.log('exercice1');

console.log(user1)

//  Exercice 2 
console.log('exercice2');

user1.phone = '415 - 222 - 9670';
console.log(user1);

// Exercice 3
console.log('exercice3');

user1.age = null;
console.log(user1);


// Exercice 4 : 
console.log('exercice4');

delete user1.age;
console.log(user1);

// Exercice 5
console.log('exercice5');

const muskChildren = ['Nevada', 'Vivian', 'Griffin', 'Kai', 'Saxon', 'Damian', 'Exa'];

Object.defineProperty(user1, 'children', {
    value: muskChildren
});
console.log(user1);
// Exercice 6 
console.log('Exercice6');

function getFullName() {
    return this.firstname + ' ' + this.lastname;
};
Object.defineProperty(user1, 'getFullName', {
    value: getFullName
});

console.log(user1);
// test de la fonction getFullName()
console.log(user1.getFullName(user1.firstname, user1.lastname));

// Exercice 7 

console.log('Exercice7');

let user2 = {
    lastname: 'Ksum',
    firstname: 'Nolen',
    age: '15',
    phone: '0422626262',
    birthdate: '2000-04-22',
    children: ['Nevadou', 'Viviane', 'Griffdeux', 'Saxophone', 'Marley', 'Exact'],
}

console.log(user2);
let users = [user1, user2];
console.log(users);

//  Exercice 8 
console.log('EXERCICE8');
//  Fonction pour parcourir la liste d'enfants
function getChildren() {
    {
        return `(` + this.children.join("-") + `)`;
    }
}

// j'ajoute mes fonctions getChildren et getFullName au user 1 et user2 
Object.defineProperty(user1, 'getChildren', {
    value: getChildren
});
Object.defineProperty(user2, 'getChildren', {
    value: getChildren
});
Object.defineProperty(user2, 'getFullName', {
    value: getFullName
});

// je sauvegarde dans une variable mon excécution d'affichage

let datasUser1 = `Nom Prenom : ` + (user1.getFullName(user1.firstname, user1.lastname) + `, ses enfants : ` + (user1.getChildren(user1.children)))
let datasUser2 = `Nom Prenom : ` + (user2.getFullName(user2.firstname, user2.lastname) + `, ses enfants :  ` + (user2.getChildren(user2.children)))
console.log(datasUser1, `\n`, datasUser2);

// console.table(users);