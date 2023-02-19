import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/api';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const MoviesSearchPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const changeSearch = ({ search }) => {
    setSearchParams({ search: search });
  };

  useEffect(() => {
    const fetchSearchMovie = async () => {
      try {
        setSearchMovies([]);
        setLoading(true);
        const { results } = await getSearchMovie(search);
        if (results.length === 0) {
          return alert('Please enter a valid request');
        }
        setSearchMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchSearchMovie();
    }
  }, [search]);

  return (
    <>
      <MoviesSearchForm onSubmit={changeSearch} />
      {loading && <Loader />}
      {searchMovies?.length > 0 && <MoviesList movies={searchMovies} />}
      {error && <Error />}
    </>
  );
};

export default MoviesSearchPage;
