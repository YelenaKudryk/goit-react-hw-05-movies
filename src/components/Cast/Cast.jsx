import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsMovie } from 'services/api';
import { ActorsList, ActorItem, ActorName } from './Cast.styled';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreditsMovie = async () => {
      try {
        setLoading(true);
        const cast = await getCreditsMovie(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCreditsMovie();
  }, [movieId]);

  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}

      {cast?.length > 0 && (
        <ActorsList>
          {cast.map(({ id, name, profile_path }) => (
            <ActorItem key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                alt={name}
                width={150}
              />
              <ActorName>{name}</ActorName>
            </ActorItem>
          ))}
        </ActorsList>
      )}

      {cast.length === 0 && !error && !loading && (
        <p>There are no credits yet</p>
      )}
    </div>
  );
};

export default Cast;
