import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as moviesAPI from "../../components/services/movieApi";
import MovieDatails from "../../components/MovieDetails/MovieDetails";

export default function MovieDatailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState({
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: null,
    id: null,
  });

  useEffect(() => {
    moviesAPI
      .fetchMovieDetails(movieId)
      .then(({ poster_path, title, overview, vote_average, genres, id }) =>
        setMovie({
          poster_path,
          title,
          overview,
          genres,
          vote_average,
          id,
        })
      )
      .catch(console.log(Error));
  }, [movieId]);

  return (
    <>
      {movie && (
        <MovieDatails
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genres={movie.genres}
          vote_average={movie.vote_average}
          id={movie.movieId}
        />
      )}
    </>
  );
}
