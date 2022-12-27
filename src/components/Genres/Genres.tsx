import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title } from './Genres.styles';
import { useCustomDispatch } from '../../hooks/redux/index';
import { getCurrentGenre } from '../../redux/slices/music/index';

interface IProps {
  name: string;
  id: number;
  picture: string;
  key: number;
  onClick?: (song: React.MouseEvent<HTMLElement>) => void;
}

const Genres: React.FC<IProps> = ({ name, picture, id }) => {
  const dispatch = useCustomDispatch();
  const placeholderAll = 'https://f4.bcbits.com/img/a2068923191_16.jpg';
  const handleCurrentGenre = (genreId: number): void => {
    dispatch(getCurrentGenre(genreId));
  };
  const nameWithoutSpace = name.replace(/\//g, '');
  const titleWithoutSlash = name.replace(/\//g, ' / ');
  return (
    <Link to={`/genre/${nameWithoutSpace}`} style={{ textDecoration: 'none' }}>
      <Container
        backgroundImage={name === 'All' ? placeholderAll : picture}
        onClick={() => handleCurrentGenre(id)}
      >
        <Title>{titleWithoutSlash}</Title>
      </Container>
    </Link>
  );
};

export default Genres;
