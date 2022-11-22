// Exercice 1

let textToDisplay = 'Comment devenir un AS en JS';

document.getElementById('text').innerHTML = textToDisplay;


console.log('Exercice2');

console.log(document.querySelector('#text').innerText);

console.log(document.querySelector('.description').innerText);
console.log(document.querySelector('ul').innerText);

let textLi = document.querySelector('ul').innerText;


// Exercice 3 
console.log('Exercice 3');
let getLi = document.querySelectorAll('li');


console.log(textLi);
// J Utilise les backquotes pour modifier mon HTML 
document.querySelector('ul').innerHTML = `   <ol>
<li>PHP</li>
<li>Ruby</li>
<li>Java</li>
<li>Javascript</li>
<li>Swift</li>
<li>C#</li>
</ol>`
console.log(document.querySelector('ol').innerText);

// Exercice 4 

console.log('Exercice 4');


console.log(document.querySelector('input'));
console.log(document.querySelector('img'));
//  Je stock le lien dans la var scrImg
let scrImg = document.querySelector('img').getAttribute("src");
console.log(scrImg);

// je change la valeur de name dans l'input
document.querySelector('input').setAttribute('name', scrImg);
console.log(document.querySelector('input'));

// Exercice 5 
console.log('Exercice 5');
// classList.add permet d'ajouter une class 
document.querySelector('span').classList.add('important');
console.log(document.getElementsByClassName('important'));

// Exercice 6 
console.log('Exercice 6');
document.querySelector('li:first-of-type').classList.add('red');
console.log(document.querySelector('li:first-of-type'));


