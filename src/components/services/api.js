// Ключ API
// 196e9f0eb847d71bcd538c7986b0c3a8
// Ключ доступа к API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTZlOWYwZWI4NDdkNzFiY2Q1MzhjNzk4NmIwYzNhOCIsInN1YiI6IjY0NmZjNDNiMTNhMzIwMDBiZjUxYTE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5e8MkLdRQoMBichLyF5I5EqI9gZ1mDxWWPNrLe5xMW0

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '0638d4937acfae28483912f2b585d98b';

//trending movies request

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return data.results;
};

//movie details request

export const getMovieById = async movieId => {
  const res = await axios
    .get(`/movie/${movieId}?api_key=${KEY}`)
    .catch(error => {
      throw new Error('Oops... seems like an error occured.');
    });
  return res.data;
};

//cast info request

export const getCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );

  return data.cast;
};

//reviews request

export const getFetchReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return data.results;
};

//search movies request

export const getMoviesByName = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};

// import axios from 'axios';

// const baseURL = 'https://api.themoviedb.org/3';
// const API_KEY = '0638d4937acfae28483912f2b585d98b'; //персональний ключ

// export const getTrendingMovies = async () => {
//   const { data } = await axios.get(
//     `${baseURL}/trending/movie/day?api_key=${API_KEY}`
//   );
//   return data;
// };

// export const fetchMoviesByQuery = async query => {
//   const { data } = await axios.get(
//     `${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
//   );
//   return data;
// };

// export const fetchMoviesById = async movieId => {
//   const { data } = await axios.get(
//     `${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
//   );
//   return data;
// };

// export const fetchMovieCast = async movieId => {
//   const { data } = await axios.get(
//     `${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//   );
//   return data;
// };

// export const fetchMovieReviews = async movieId => {
//   const { data } = await axios.get(
//     `${baseURL}/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//   );
//   return data;
// };
