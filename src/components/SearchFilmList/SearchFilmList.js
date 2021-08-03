import React from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";

export default function FilmsList({ films }) {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <ul>
      {films.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{original_title}</Link>
        </li>
      ))}

      {/* {films[0] &&
        films.map(({ id, original_title }) => {
          return (
            <FilmItem
              key={id}
              id={id}
              original_title={original_title}
              url={url}
            />
          );
        })} */}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};
