let currentPage = 1;
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=" + '&page=' + currentPage;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieList = document.getElementById('movieList');

// fonction pour rrecuperer les films depuis
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

// affichage des films , j'ai creer le htmml directement dans le js
function showMovies(movies) {
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieDiv = document.createElement('div');
    movieDiv.classList.add('col-md-3', 'my-3');

    const movieCard = `
      <div class="card bg-transparent h-100">
        <img src="${IMGPATH + poster_path}" class="card-img-top" alt="${title}">
        <p class="card-text m-auto position-absolute text-light bg-dark bg-opacity-50 container">${overview}</p>
        <div class="card-body bg-dark ">
          <h5 class="card-title text-white">${title}</h5>
         
          <p class="card-text"><small class="text-muted">${vote_average}</small></p>
        </div>
      </div>
    `;

    movieDiv.innerHTML = movieCard;
    movieList.appendChild(movieDiv);

  });
   
}

let isLoading = false;

// charge les films de la page suivante
async function loadNextPage() {
  if (isLoading) return; // éviter les requêtes multiples en cas de défilement rapide
  isLoading = true;
  const res = await fetch(APIURL + '&page=' + currentPage);
  const data = await res.json();
  showMovies(data.results);
  currentPage++;
  isLoading = false;
}

// détecter le défilement de la fenêtre et charger la page suivante si l'utilisateur a atteint le bas de la page
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
    loadNextPage();
  }
});



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
// rendre editable le texte
movieList.addEventListener('dblclick', (e) => {
  let content=e.target.classList.contains('card-text');
  if (content) {
   console.log("double clic !");
   e.target.setAttribute("contenteditable", "true");
   let changement=[]
   new_content=window.localStorage.setItem(changement,e.target.parentElement)
   console.log(e.target.textContent)
  }
});
// rendre editable l'image
movieList.addEventListener('dblclick', (e) => {
  content=e.target.classList.contains('card-img-top')
  if (content){
    console.log("ok")
    e.target.removeAttribute("src")

  }
});



// Search movie by name
const searchForm = document.getElementById('searchForm');
const searchInput = searchForm.querySelector('input');

searchInput.addEventListener('input', (e) => {
  e.preventDefault();

  const searchTerm = searchInput.value.trim();
  if (searchTerm && searchTerm.length > 1) { // Seulement si l'utilisateur a saisi au moins 3 caractères
    getMovies(SEARCHAPI + searchTerm);
  } else {
    movieList.innerHTML = ""; // Effacer les résultats de recherche précédents
    getMovies(APIURL);
  }
  
});

