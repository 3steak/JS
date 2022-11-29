// fetch('./assets/js/movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));





// object type
// "id": 399566,
// "original_title": "Godzilla vs. Kong",
// "overview": "À une époque où les monstres parcourent la Terre, et alors que l’humanité lutte pour son avenir, Godzilla et King Kong, les deux forces les plus puissantes de la nature, entrent en collision dans une bataille spectaculaire inédite. Alors que Monarch se lance dans une mission périlleuse en terrain inconnu, et qu’il découvre des indices sur les origines des Titans, un complot humain menace d’éradiquer ces créatures – qu’elles soient bonnes ou mauvaises – de la surface de la planète.",
// "poster_path": "https://image.tmdb.org/t/p/original/4bTShLVFnVKK31cowgjdAIZV84T.jpg",
// "vote_average": 8.3


const img = document.querySelector('.imgMovie');

// promise en pending 
let myObject = fetch('./assets/js/movies.json')


    // response de mon fetch

    .then((response) => {
        // desérialisation du fichier json 
        return response.json();
    })
    .then((movies) => {
        let allMovies = movies.results;
        // console.log(allMovies[0]);
        // img.src = allMovies[0].poster_path;
        // console.log(img);

        let html = '';
        allMovies.forEach((movies, index) => {
            let htmlSegment =
                `
                    <div class="col-2 carte mt-4 contentCard text-center">
                        <img src="${movies.poster_path}" alt="image du film ${movies.original_title}">
                        <!-- <h2 class="titleMovie">${movies.original_title}</h2> -->
                        <p class="markMovie">${movies.vote_average}</p>

                        <p><button class="btn btn-light btn-sm opacity-75" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight${index}" aria-controls="offcanvasRight">Ça parle de quoi ?</button></p>

                        
                    </div>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight${index}" aria-labelledby="offcanvasRightLabel">

                    <div class="offcanvas-body">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">${movies.original_title}</h5>
                        <p class="textMovie">${movies.overview}</p>
                    </div>
                    </div>
                `;

            html += htmlSegment;
            let row = document.querySelector('.row');
            row.innerHTML = html;
        });


        let button = document.querySelector('.btn-sm');
        button.addEventListener("click", (event) => {
            let htmlCanvas = '';
            allMovies.forEach(movies => {
                let htmlCanvasSegment = `
            
            `;
                htmlCanvas += htmlCanvasSegment;

                let canvasBody = document.getElementById('.offcanvasRight');
                canvasBody.innerHtml = htmlCanvas;
            });
        });

    }
    );



// class name

// card
// imgMovie
// titleMovie
// textMovie
