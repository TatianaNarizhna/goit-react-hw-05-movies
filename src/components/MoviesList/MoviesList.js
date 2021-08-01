import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
