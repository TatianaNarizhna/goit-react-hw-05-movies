import axios from "axios";
// const axios = require('axios');
const BASE_URL = "https://developers.themoviedb.org/3";
const API_KEY = "a746c25728fd41f4fba1ed9293c9d732";

axios.defaults.baseURL = BASE_URL;

async function fetchMovies(url = "", config = {}) {
  const { data } = await axios.get(url, config);
  console.log(data.results);
  return data.ok
    ? await data.json()
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

// async function fetchTrend() {
// //     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
// //     const { data } = await axios.get(url);
// //     // console.log(data.results);
// //     return data.results;
// // }

// // export default fetchTrend;
