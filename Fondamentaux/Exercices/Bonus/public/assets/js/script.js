// Exercice 1

let button = document.getElementById('btn');
let password = document.getElementById('password');
let verifPassword = document.getElementById('verifPassword');

button.addEventListener("click", (verif) => {
    // si un des deux inputs est vide
    if (password.value === '' || verifPassword.value === '') {
        console.log(alert('veuillez renseigner un champs'));
        //  si un les deux inputs sont identiques j'utilise bg-secondary en class
    } else if (password.value == verifPassword.value) {
        password.classList.add('bg-success');
        verifPassword.classList.add('bg-success');
        //  si ils sont différents j'utilise la class bootstrap 
    } else {
        password.classList.add('bg-danger');
        verifPassword.classList.add('bg-danger');
    }
})

// button.addEventListener("click", (verif) => {
//     // si un des deux inputs est vide
//     if (password.value == '' || verifPassword.value === '') {
//         console.log(alert('veuillez renseigner un champs'));
//         //  si un les deux inputs sont identiques
//     } else if (password.value == verifPassword.value) {
//         password.style.border = "2px solid green";
//         verifPassword.style.border = "2px solid green";
//         //  si ils sont différents
//     } else {
//         password.style.border = "2px solid red";
//         verifPassword.style.border = "2px solid red";
//     }
// })






