import { Link, useLocation } from 'react-router-dom';
import {
  MoviesListStyled,
  MovieItem,
  MovieName,
  RealeseDate,
  MovieImg,
} from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <MoviesListStyled>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <MovieItem key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
              />
              <MovieName>{title}</MovieName>
              <RealeseDate>{release_date}</RealeseDate>
            </Link>
          </MovieItem>
        ))}
      </MoviesListStyled>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
