import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import { TitleStyles } from './HomePage.styled';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(prevState => [...prevState, ...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <TitleStyles>Tranding today</TitleStyles>
      {movies?.length > 0 && <MoviesList movies={movies} />}
      {error && <Error />}
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
