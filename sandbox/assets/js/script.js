`
<div class="col-2 carte m-3">
    <div class="img p-2">
    </div>
    <div class="asideCard p-2">
        <h2 class="titleMovie">${movies.original_title}</h2>
        <p class="textMovie">${movies.overview}</p>
        <p class="markMovie">${movies.vote_average}</p>
    </div>
</div>`


    < div class=" col-2 carte mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
                <img class="imgMovie" src="${movies.poster_path}" alt="image du film ${movies.original_title}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title titleMovie">${movies.original_title}</h5>
                    <p class="card-text textMovie">${movies.overview}</p>
                    <p class="card-text markMovie"><small class="text-muted">${movies.vote_average}</small></p>
                </div>
            </div>
        </div>
</div >