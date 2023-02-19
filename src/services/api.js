import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4fbbe6209ef8b6b30e6151d4478e9f78',
    language: 'en-US',
    page: 1,
    include_adult: false,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await instance.get(`/search/movie?`, {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}?`);
  return data;
};

export const getCreditsMovie = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits?`);
  return data.cast;
};

export const getReviewsMovies = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews?`);
  return data.results;
};
