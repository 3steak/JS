fetch('./assets/js/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

// object type
// "id": 399566,
// "original_title": "Godzilla vs. Kong",
// "overview": "À une époque où les monstres parcourent la Terre, et alors que l’humanité lutte pour son avenir, Godzilla et King Kong, les deux forces les plus puissantes de la nature, entrent en collision dans une bataille spectaculaire inédite. Alors que Monarch se lance dans une mission périlleuse en terrain inconnu, et qu’il découvre des indices sur les origines des Titans, un complot humain menace d’éradiquer ces créatures – qu’elles soient bonnes ou mauvaises – de la surface de la planète.",
// "poster_path": "https://image.tmdb.org/t/p/original/4bTShLVFnVKK31cowgjdAIZV84T.jpg",
// "vote_average": 8.3


