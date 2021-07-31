import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      HomePage
    </NavLink>

    <NavLink
      exact
      to="/movies"
      className={s.link}
      activeClassName={s.activeLink}
    >
      MoviesPage
    </NavLink>

    <NavLink
      exact
      to="/movies/:movieId"
      className={s.link}
      activeClassName={s.activeLink}
    >
      MovieDetailsPage
    </NavLink>

    <NavLink
      exact
      to="/movies/:movieId/cast"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Cast
    </NavLink>

    <NavLink
      exact
      to="/movies/:movieId/reviews"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Reviews
    </NavLink>
  </nav>
);

export default Navigation;
