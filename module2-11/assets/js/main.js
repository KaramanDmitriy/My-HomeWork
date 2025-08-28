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

// Додаємо модальне вікно для улюблених фільмів, якщо ще не додано
if (!document.getElementById('favorites-modal')) {
    const favModalHTML = `
    <div class="modal fade" id="favorites-modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Улюблені фільми</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="favorites-list"></div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', favModalHTML);
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
        const isFav = isFavorite(movie.imdbID);
        const movieItem = document.createElement('div');
        movieItem.classList.add('col-md-12', 'mb-4');
        movieItem.innerHTML=`
            <div class="card">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'assets/images/reklama.jpg'}" class="card-img-top" alt="${movie.Title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">Year: ${movie.Year}</p>
                    <button class="btn btn-primary details-btn" data-imdbid="${movie.imdbID}">Details</button>
                    <button class="btn favorite-btn" data-imdbid="${movie.imdbID}" title="Додати до улюблених" style="font-size:1.5rem;color:${isFav ? '#dc3545' : '#aaa'};">
                        <span>${isFav ? '&#10084;' : '&#9825;'}</span>
                    </button>
                </div>
            </div>
        `;
        moviesList.appendChild(movieItem);
    });

    // Обробник для Details
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
            const modal = new bootstrap.Modal(document.getElementById('movie-modal'));
            modal.show();
        });
    });

    // Обробник для сердечка
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const imdbID = this.getAttribute('data-imdbid');
            const movie = movies.find(m => m.imdbID === imdbID);
            toggleFavorite(movie);
            showMoviesList(movies); // Оновлюємо список, щоб змінити вигляд сердечка
        });
    });
}

// Показати модальне вікно з улюбленими
document.getElementById('favorites-btn').addEventListener('click', function() {
    const favs = getFavorites();
    const favList = document.getElementById('favorites-list');
    if (favs.length === 0) {
        favList.innerHTML = "<p>Улюблених фільмів поки немає.</p>";
    } else {
        favList.innerHTML = favs.map(movie => `
            <div class="d-flex align-items-center mb-3">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'assets/images/reklama.jpg'}" alt="${movie.Title}" style="width:60px;height:90px;object-fit:cover;margin-right:15px;">
                <div>
                    <h6>${movie.Title} (${movie.Year})</h6>
                    <button class="btn btn-sm btn-primary fav-details-btn" data-imdbid="${movie.imdbID}">Details</button>
                    <button class="btn btn-sm remove-fav-btn" data-imdbid="${movie.imdbID}" title="Видалити з улюблених" style="color:#dc3545;font-size:1.2rem;">&#10084;</button>
                </div>
            </div>
        `).join('');
    }
    const favModalEl = document.getElementById('favorites-modal');
let favModal = bootstrap.Modal.getInstance(favModalEl);
if (!favModal) {
    favModal = new bootstrap.Modal(favModalEl);
}
favModal.show();

    // Деталі фільму з улюблених
    document.querySelectorAll('.fav-details-btn').forEach(btn => {
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
            // Закриваємо модальне вікно улюблених перед відкриттям нового
            const favModalEl = document.getElementById('favorites-modal');
            let favModal = bootstrap.Modal.getInstance(favModalEl);
            if (favModal) {
                favModal.hide();
            }
            // Відкриваємо модальне з деталями
            const modal = new bootstrap.Modal(document.getElementById('movie-modal'));
            modal.show();
        });
    });

    // Видалити з улюблених
    document.querySelectorAll('.remove-fav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const imdbID = this.getAttribute('data-imdbid');
            let favs = getFavorites().filter(f => f.imdbID !== imdbID);
            setFavorites(favs);
            document.getElementById('favorites-btn').click(); // Оновити список
        });
    });
});

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
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}
function setFavorites(favs) {
    localStorage.setItem('favorites', JSON.stringify(favs));
}
function isFavorite(imdbID) {
    return getFavorites().some(f => f.imdbID === imdbID);
}
function toggleFavorite(movie) {
    let favs = getFavorites();
    if (isFavorite(movie.imdbID)) {
        favs = favs.filter(f => f.imdbID !== movie.imdbID);
    } else {
        favs.push(movie);
    }
    setFavorites(favs);
}