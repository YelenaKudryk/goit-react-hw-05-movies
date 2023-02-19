import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovies } from 'services/api';
import { ReviewsList, ReviewsName } from './Reviews.styled';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewsMovies = async () => {
      try {
        setLoading(true);
        const results = await getReviewsMovies(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsMovies();
  }, [movieId]);

  return (
    <>
      {error && <Error />}
      {loading && <Loader />}
      {reviews.length === 0 && !loading && <p>There is nothing here yet</p>}

      {reviews?.length > 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewsName>Autor: {author}</ReviewsName>
              <p>Reviews: {content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
