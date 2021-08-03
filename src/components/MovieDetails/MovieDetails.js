export default function MovieDetails({
  poster_path,
  title,
  overview,
  genres,
  vote_average,
}) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>
          User Score: <span>{vote_average * 10}%</span>
        </p>
        <h3>Overview</h3>
        Overview:<span>{overview}</span>
        <h4>Genres</h4>
        <ul>
          {/* {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))} */}
        </ul>
      </div>
      <div>
        <p>Additional information</p>
      </div>
    </div>
  );
}
