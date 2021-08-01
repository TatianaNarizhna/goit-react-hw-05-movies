import axios from "axios";
// const axios = require('axios');
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a746c25728fd41f4fba1ed9293c9d732";

// axios.defaults.baseURL = BASE_URL;

// async function fetchMovies(url = "", config = {}) {
//   const { data } = await axios.get(url, config)
//   console.log(data.results);

//   if (data.ok) {
//     return data.json();
//   }
// }

export function fetchTrend() {
  return axios
    .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then((response) => response.data.results);
}

export function fetchMoviesBySearch() {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    )
    .then((response) => response.data.results);
}

export function fetchMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

export function fetchMovieCredits(movieId) {
  return axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMoviesReviews(movieId, page) {
  return axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );
}

// async function fetchMovies(url = "", config = {}) {
//   const { data } = await axios.get(url, config)
//   console.log(data.results);

//   if (data.ok) {
//     return data.json();
//   }
// }

// export function fetchTrend() {
//   return fetchMovies(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
// }

// export function fetchMoviesBySearch() {
//   return fetchMovies(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
//   );
// }

// export function fetchMovieDetails(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
//   );
// }

// export function fetchMovieCredits(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//   );
// }

// export function fetchMoviesReviews(movieId, page) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
//   );
// }
