// Exercice 1

let button = document.getElementById('btn');
let password = document.getElementById('password');
let verifPassword = document.getElementById('verifPassword');

button.addEventListener("click", (verif) => {
    // si un des deux inputs est vide
    if (password.value == '' || verifPassword.value === '') {
        console.log(alert('veuillez renseigner un champs'));
        //  si un les deux inputs sont identiques
    } else if (password.value == verifPassword.value) {
        console.log(alert('oui'));
        //  si ils sont différents
    } else {
        document.querySelector('input').style.color = "red";
    }
})






