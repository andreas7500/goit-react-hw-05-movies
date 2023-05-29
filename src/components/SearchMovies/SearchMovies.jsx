import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Input } from './SerchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (!query) {
      toast('Enter please a movie name.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      return;
    }
    onSubmit(query);
    evt.target.reset();
  };

  return (
    <div>
      <ToastContainer />
      <Form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <Input
          name="query"
          type="text"
          placeholder="Enter the movie..."
          autoComplete="off"
          style={{ width: '300px' }}
        />
        <Button type="submit" variant="outlined" size="small">
          Search
        </Button>
      </Form>
    </div>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
