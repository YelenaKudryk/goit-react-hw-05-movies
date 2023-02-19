import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'services/api';
import {
  SectionStyles,
  MovieImg,
  Info,
  SectionAdditional,
  AdditionalTitle,
  AdditionalList,
  StyledNavLink,
} from './MovieDetailsPage.styled';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setLoading(true);
        const result = await getMovieById(movieId);
        setMovie(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  // movie.genres.map(genre => genre.name).join(', ');

  const goBack = () => {
    navigate(-1);
  };

  console.log(movie.genres);

  return (
    <>
      {loading && <Loader />}
     {<Link to='' state={} >Go back<Link/>}

      {/* <button onClick={goBack} type="button">
        Go back
      </button> */}

      {movie && (
        <>
          <SectionStyles>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
            <Info>
              <h3>{movie.title}</h3>
              <p>
                User score: <span>{movie.vote_average}</span>{' '}
              </p>
              <h5>Overview: </h5>
              <p>{movie.overview}</p>
              <h5>Genres: </h5>
              <p>TEXT</p>
            </Info>
          </SectionStyles>
          <SectionAdditional>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <AdditionalList>
              <li>
                <StyledNavLink to={`/movies/${movieId}/cast`}>
                  Cast
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to={`/movies/${movieId}/reviews`}>
                  Reviews
                </StyledNavLink>
              </li>
            </AdditionalList>
            <Outlet />
          </SectionAdditional>
        </>
      )}

      {!movie && error && <Error />}
    </>
  );
};

export default MovieDetailsPage;
