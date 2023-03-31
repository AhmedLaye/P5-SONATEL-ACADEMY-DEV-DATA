const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieList = document.getElementById('movieList');

// Fetch the movie data from API
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

// Display movies in HTML
function showMovies(movies) {
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieDiv = document.createElement('div');
    movieDiv.classList.add('col-md-3', 'my-3');

    const movieCard = `
      <div class="card">
        <img src="${IMGPATH + poster_path}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${overview}</p>
          <p class="card-text"><small class="text-muted">${vote_average}</small></p>
        </div>
      </div>
    `;

    movieDiv.innerHTML = movieCard;
    movieList.appendChild(movieDiv);
  });
}

getMovies(APIURL);

// Add hover effect to movie cards
movieList.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('card-img-top')) {
    const cardBody = e.target.nextElementSibling;
    cardBody.classList.add('show-description');
  }
});

movieList.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('card-img-top')) {
    const cardBody = e.target.nextElementSibling;
    cardBody.classList.remove('show-description');
  }
});

// Search movie by name
const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = searchForm.searchInput.value.trim();

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    searchForm.reset();
  }
});
