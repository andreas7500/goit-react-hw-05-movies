import { getFetchReviews } from '../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Item, Section, Wrapper } from './/Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getFetchReviews(movieId);
        setReviews(data);
      } catch (e) {
        console.log(e, 'There has been a mistake');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        {reviews && (
          <Wrapper>
            {reviews.map(({ author, content, id }) => (
              <Item key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </Item>
            ))}
          </Wrapper>
        )}
        {reviews?.length === 0 && <p>There is no information</p>}
      </Section>
    </>
  );
};
export default Reviews;
