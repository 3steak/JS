// Exercice 5 


let divImgRandom = document.querySelector('.section-exo');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// je déclare ma seule image présente au chargement de la page
let numImages = 1;

// fonction pour créer une nouvelle image
function newImg() {
    let i = 0;
    while (i < numImages) {
        let idRandom = getRandomInt(1000);
        const createImg = document.createElement('img');
        createImg.src = `https://picsum.photos/id/${idRandom}/800/800`;
        divImgRandom.appendChild(createImg);
        i++;
    };
}
newImg();




window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight) {
        // loadImages();
        newImg();
    }
});


