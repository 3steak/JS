// Exercice 1

console.log('EXERCICE 1');
let btn = document.getElementsByClassName('button');
console.log(btn);

// Exercice 3 
// event.key event.code   key retient le caractere, code retient le code de la touche 
//  keypress est le type de l'evenement 
// (event) est la fonction à appeler lorsque l'evenement apparé 
addEventListener("keypress", (event) => {
    console.log(event.code + ` correspond à la touche ` + event.key);
});

// Exercice 4
// taille du nombre de li (document.querySelectorAll('li').length)
for (let nthNbr = 0; nthNbr <= document.querySelectorAll('li').length; nthNbr++) {
    let oui = document.querySelector('li:nth-of-type(' + nthNbr + ')')
    // controle du oui sinon addEvent est null
    if (oui) {
        oui.addEventListener("click", (echoList) => {
            console.log(document.querySelector('li:nth-of-type(' + nthNbr + ')').innerText);
        }
        );
    }
};
//  Exercice 5

// rul ?firstname=Cyprien&lastname=Bocquet

let url = window.location.search;
console.log(url);
