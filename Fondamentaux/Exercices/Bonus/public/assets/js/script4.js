// Exercice 4
//  je sauvegarde mes variables qui pointe mes ID 
let button = document.getElementById('btn');
let mark = document.querySelectorAll('.mark');
let card = document.querySelectorAll('.card_exercice');



function moy(marks) {
    let index = 0;
    let sum = 0;
    let marksLength = marks.length;
    let result = 0;

    marks.forEach((number, index) => {
        sum = sum + marks[index++];
    });
    result = sum / marksLength
    return result;
}




button.addEventListener('click', () => {

    let marks = [];
    mark.forEach((inputMark) => {
        // ajouter la valeur de inputmark à marks
        let inputMarkValue = Number(inputMark.value);
        marks.push(inputMarkValue)
    })

    let avg = (moy(marks));
    if ((avg >= 0) && avg <= 5) {
        card[0].style.backgroundColor = ('rgb(255, 0, 0, 0.5)');

        alert('NOM PRENOM SUR LA FEUILLE C\'EST BIEN ! Tu as ' + avg + ' de moyenne')
        // c'est bien tu as écris ton prénom ! 
    } else if (((avg >= 6) && avg <= 9)) {
        card[0].style.backgroundColor = ('rgba(233, 55, 55, 0.5)');

        alert(' Tu y es presque ! Tu as ' + avg + ' de moyenne')
        // t'y est presque ! 
    } else if (avg == 10) {
        card[0].style.backgroundColor = ('rgba(45, 45, 218, 0.5)');

        alert('Bien la moyenne mon petit ! Tu as ' + avg + ' de moyenne')
        // Bien la moyenne mon petit ! 
    } else if ((avg >= 11) && avg <= 15) {
        card[0].style.backgroundColor = ('rgba(179, 169, 146, 0.5)');

        alert('Bien mon grand !Tu as ' + avg + ' de moyenne')
        // Bien ça ! 
    } else if ((avg >= 16) && avg <= 19) {
        card[0].style.backgroundColor = ('rgba(182, 158, 103, 0.5)');

        alert('Tu approches la perfection ! Tu as ' + avg + ' de moyenne')
        // tu approches la perfection ! 
    } else {
        card[0].style.backgroundColor = ('rgba(218,154,32 0.5)');

        alert('CHAMPIONNNN !!Tu as ' + avg + ' de moyenne :) ')
        // Chanpion !!! 
    }


});


// Test regex

// // regex number
// let reNumber = new RegExp('[0-9]')

// addEventListener('change', (e) => {
//     testMark();
// });


// let testMark = () => {
//     mark.forEach((inputMark) => {
//         // ajouter la valeur de inputmark à marks
//         let inputMarkValue = Number(inputMark.value);


//         if (reNumber.test(inputMarkValue)) {
//             console.log('valid');
//             mark.classList.add("green");
//         }
//         else {
//             console.log('invalid');
//             mark.classList.add("red");
//             document.getElementById('smallmark1').style.display = 'block';
//             setTimeout(() => {
//                 mark.classList.remove("red", "green");
//                 document.getElementById('smallmark1').style.display = 'none';
//                 inputMarkValue = '';
//             }, "2000")
//         }
//     })
// };



