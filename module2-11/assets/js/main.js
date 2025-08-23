const API_KEY = "9266439c"

async function serchMovie(search, type, year){
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&y=${year}`);
    const data = await response.json(); 
    if(data.Response==="False"){
        alert(data.Error);
        return;
    }
    showMoviesList(data.Search);
}

// Додаємо модальне вікно в кінець body (один раз)
if (!document.getElementById('movie-modal')) {
    const modalHTML = `
    <div class="modal fade" id="movie-modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body"></div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Функція для отримання деталей фільму
async function fetchMovieDetails(imdbID) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
    const data = await response.json();
    return data;
}

// Оновлюємо showMoviesList, щоб додати обробник події на кнопку Details
function showMoviesList(movies){
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML="";
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('col-md-12', 'mb-4');
        movieItem.innerHTML=`
            <div class="card">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'assets/images/reklama.jpg'}" class="card-img-top" alt="${movie.Title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">Year: ${movie.Year}</p>
                </div>
                <button class="btn btn-primary details-btn" data-imdbid="${movie.imdbID}">Details</button>
            </div>
        `;
        moviesList.appendChild(movieItem);
    });

    // Додаємо обробник події для всіх кнопок Details
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', async function() {
            const imdbID = this.getAttribute('data-imdbid');
            const details = await fetchMovieDetails(imdbID);
            document.getElementById('modal-title').textContent = details.Title;
            document.getElementById('modal-body').innerHTML = `
                <img src="${details.Poster !== 'N/A' ? details.Poster: 'assets/images/reklama.jpg'}" class="img-fluid mb-2" alt="${details.Title}">
                <p><strong>Year:</strong> ${details.Year}</p>
                <p><strong>Genre:</strong> ${details.Genre}</p>
                <p><strong>Director:</strong> ${details.Director}</p>
                <p><strong>Actors:</strong> ${details.Actors}</p>
                <p><strong>Plot:</strong> ${details.Plot}</p>
                <p><strong>IMDB Rating:</strong> ${details.imdbRating}</p>
                <div class="progress" role="progressbar" aria-label="${details.imdbRating >= 7 ? "Success" : details.imdbRating >= 4 ? "Warning" : "Danger"} example" aria-valuenow="${details.imdbRating*10}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar text-bg-${details.imdbRating >= 7 ? "success" : details.imdbRating >= 4 ? "warning" : "danger"}" style="width: ${details.imdbRating*10}%"></div>
                </div>
            `;
            // Відкриваємо модальне вікно (Bootstrap 5)
            const modal = new bootstrap.Modal(document.getElementById('movie-modal'));
            modal.show();
        });
    });
}

const form = document.getElementById('search-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const search = document.getElementById('search-input').value.trim();
    const type = document.getElementById('type').value;
    const year = document.getElementById('year').value.trim();
   if(search===""){
    return;
   }
   serchMovie(search, type, year);
})

document.getElementById('year').setAttribute("max", new Date().getFullYear());