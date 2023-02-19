import { Link } from 'react-router-dom';
import {
  MoviesListStyled,
  MovieItem,
  MovieName,
  RealeseDate,
  MovieImg,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <MoviesListStyled>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`}>
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
