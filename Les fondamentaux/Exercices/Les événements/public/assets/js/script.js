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

// let url = window.location.search;
// console.log(url);




let getValue = () => {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    // exo 06 
    const day = document.getElementById('days').value
    const input = firstname + ` ` + lastname + ` a choisi le jour : ` + day;
    console.log(input);
};
// Exercice 5 
// ma classe red est un tableau HTMLCOLLECTION le foreach ne fonctionne pas 
// je stock dans arrayRED
const arrayRed = document.getElementsByClassName('red');
// je boucle l'index ( pour avoir chaque input qui a pour class red )
for (let indexOfRed = 0; indexOfRed < arrayRed.length; indexOfRed++) {

    // this fait référence a mon HTMLELEMENT : arrayRed[indexOfRed]
    arrayRed[indexOfRed].addEventListener("focusin", function () {
        this.style.backgroundColor = "red";
    });
    arrayRed[indexOfRed].addEventListener("focusout", function () {
        this.style.backgroundColor = "white";
    });
}



// Exercice 6
// recuperer value de id days
// voir function getValue()


