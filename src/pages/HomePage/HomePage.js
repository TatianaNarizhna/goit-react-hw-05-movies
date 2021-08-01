// import React, { Component } from 'react';
import { useState, useEffect } from "react";
import * as moviesAPI from "../../components/services/movieApi";
import PageHeading from "../../components/PageHeading/PageHeading";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .fetchTrend()
      .then((results) => setMovies({ movies: [...results] }));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
    </>
  );
}

// class HomePage extends Component {
//   state = {
//     movies: [],
//   };

//   componentDidMount() {
//     moviesAPI
//       .fetchTrend()
//       .then(results => this.setState({ movies: [...results] }));
//   }

//   render() {
//     const { movies } = this.state;
//     return <PageHeading movies={movies} />;
//   }
// }

// export default HomePage;

// const API_KEY = '61153224aaaa08b03f5d3b14add082d2';
// const BASE_URL = 'https://api.themoviedb.org/3';

// function HomePage(n = 1) {
//   return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${n}`)
//     .then(r => {
//       if (r.ok) {
//         return r.json()
//       }

//     })
//     .then(({ results, total_pages }) => {
//       return { results, totalPages: total_pages };
//     })
//     .catch(error => console.log(error));
// }

// const api = {
//   HomePage,
// };

// export default api;
