import React, { useState, useEffect } from "react";
import * as moviesAPI from "../../components/services/movieApi";
import Container from "../../components/Container/Container";
import SearchFilm from "../../components/SearchFilm/SearchFilm";
import SearchFilmList from "../../components/SearchFilmList/SearchFilmList";

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const [films, setfilms] = useState([]);

  const onSubmitSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }
    moviesAPI
      .fetchMoviesBySearch(search)
      .then((response) => {
        setfilms(response.results);
      })
      .catch(console.log(Error));
  }, [search]);

  return (
    <div>
      <Container>
        <SearchFilm onSubmit={onSubmitSearch} />
      </Container>
      <Container>
        <SearchFilmList films={films} />
      </Container>
    </div>
  );
}
