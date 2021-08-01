const BASE_URL = "https://developers.themoviedb.org/3";
const API_KEY = "61153224aaaa08b03f5d3b14add082d2";

async function fetchMovies(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Movie not found"));
}

export function fetchTrend() {
  return fetchMovies(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

export function fetchMoviesBySearch() {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMoviesReviews(movieId, page) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );
}

// function fetchSearch(search, page) {
//     return fetch(
//       `https://pixabay.com/api/?q=${search}&page=${page}&key=21902781-05f70a6abac1a4120ac7c9ed1&image_type=photo&orientation=horizontal&per_page=12`
//     ).then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(new Error(`Request ${search} not found`));
//     });
//   }

//   const api = {
//     fetchSearch,
//   };

//   export default api;
