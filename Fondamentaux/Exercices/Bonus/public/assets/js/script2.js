// Exercice 2
// Création d'expressions régfulière 
// [0-9] : Les caractères allant de “0” à “9” autrement dit un chiffre.
// [a-zA-Z] : De “a” à “z” et  de “A” à “Z”
// [a-zA-ZÀ-ÿ] : De “a” à “z” et  de “A” à “Z” et “À” à “ÿ” bref tous les mots
// [\(-\+] : Ça marche aussi avec les caractères spéciaux (en bleu). Pour les utiliser, il faut placer un antislash avant, et ça se lit : De « ( » à « + »
// [^0-9] : Tous les caractères sauf ceux entre « 0 » et « 9 »


// min MAJ
let reMinMaj = new RegExp("[a-zA-ZÀ-ÿ]");
// Sans caractère spéciaux 

// number
let reNumber = new RegExp('[0-9]')

// Tel 
let reTel = new RegExp('(01|02|03|04|05|06|07|08|09)[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}');

// Mail
let reMail = new RegExp('[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})');

//  je sauvegarde mes variables qui pointe mes ID 
let button = document.getElementById('btn');
let lastname = document.getElementById('lastname');
let firstname = document.getElementById('firstname');
let email = document.getElementById('email');
let age = document.getElementById('age');






// Création des fonctions testInput
// test renvoi true ou false$

let testLastname = () => {
    if (reMinMaj.test(lastname.value)) {
        lastname.classList.add("bg-success");
    }
    else {
        console.log('invalid');
        lastname.classList.add("bg-danger");
        document.getElementById('smallLastname').style.display = 'block';
        setTimeout(() => {
            lastname.classList.remove("bg-danger", "bg-success");
            document.getElementById('smallLastname').style.display = 'none';
            lastname.value = '';
        }, "2000")
    }
};


let testFirstname = () => {
    if (reMinMaj.test(firstname.value)) {
        firstname.classList.add("bg-success");
    }
    else {
        console.log('invalid');
        firstname.classList.add("bg-danger");
        document.getElementById('smallFirstname').style.display = 'block';
        setTimeout(() => {
            firstname.classList.remove("bg-danger", "bg-success");
            document.getElementById('smallFirstname').style.display = 'none';
            firstname.value = '';
        }, "2000")
    }
};


let testEmail = () => {
    if (reMail.test(email.value)) {
        console.log('valid');
        email.classList.add("bg-success");
    }
    else {
        console.log('invalid');
        email.classList.add("bg-danger");
        document.getElementById('smallEmail').style.display = 'block';
        setTimeout(() => {
            email.classList.remove("bg-danger", "bg-success");
            document.getElementById('smallEmail').style.display = 'none';
            email.value = '';
        }, "2000")
    }
};
let testAge = () => {
    if (reNumber.test(age.value)) {
        console.log('valid');
        age.classList.add("bg-success");
    }
    else {
        console.log('invalid');
        age.classList.add("bg-danger");
        document.getElementById('smallAge').style.display = 'block';
        setTimeout(() => {
            age.classList.remove("bg-danger", "bg-success");
            document.getElementById('smallAge').style.display = 'none';
            age.value = '';
        }, "2000")
    }
};


email.addEventListener('change', (e) => {
    testEmail();
})


lastname.addEventListener('change', (e) => {
    testLastname();
})
firstname.addEventListener('change', (e) => {
    testFirstname();
})

age.addEventListener('change', (e) => {
    testAge();
})



