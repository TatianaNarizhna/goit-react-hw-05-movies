import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as moviesAPI from "../../components/services/movieApi";
// import PageHeading from "../../components/PageHeading/PageHeading";
import MovieDatails from "../../components/MovieDetails/MovieDetails";

export default function MovieDatailsPage() {
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState({
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    release_date: null,
    id: null,
  });

  console.log(movie);

  useEffect(() => {
    moviesAPI
      .fetchMovieDetails(movieId)
      .then(
        ({ poster_path, title, overview, vote_average, release_date, id }) =>
          setMovie({
            poster_path,
            title,
            overview,
            vote_average,
            release_date,
            id,
          })
      );
  }, [movieId]);

  return (
    <>
      {movie && (
        <MovieDatails
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          id={movie.movieId}
        />
      )}
    </>
  );
}
