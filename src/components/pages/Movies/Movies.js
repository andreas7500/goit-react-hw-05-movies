import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesByName } from '../../services/api';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { List, ListItem, MovieLink } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      setIsLoading(true);
      try {
        const { results } = await getMoviesByName(query);
        if (results.length === 0) {
          toast.error('Movie not found. Please try again.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        } else {
          setMovies(results);
          // console.log(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <ToastContainer />
      <SearchMovies onSubmit={handleSubmit} />
      {/* {isLoading && <p>Loading...</p>} */}
      {isLoading && <Loader />}

      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Movies;
