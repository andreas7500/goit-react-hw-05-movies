import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TrendingMovieLink, List, ListItem } from './MovieList.styled';
import { Loader } from 'components/Loader/Loader';

const MovieList = ({ trending, loading }) => {
  const location = useLocation();
  return (
    <>
      {loading ? (
        // <div>Loading</div>
        <Loader />
      ) : (
        <List>
          {trending.map(({ id, title, name }) => (
            <ListItem key={id}>
              <TrendingMovieLink
                to={`movies/${id}`}
                state={{ from: location.pathname }}
              >
                {title || name}
              </TrendingMovieLink>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  trending: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};
