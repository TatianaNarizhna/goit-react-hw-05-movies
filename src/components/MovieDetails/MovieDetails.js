export default function MovieDetails({
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
  id,
}) {
  return (
    <div>
      <img src={`${poster_path}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>
          Release data: <span>{release_date}</span>
        </p>
        <p>
          Rating: <span>{vote_average}</span>
        </p>
        <p>
          Overview:<span> {overview}</span>
        </p>
      </div>
      <p>Additional information</p>
    </div>
  );
}
