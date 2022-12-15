import React from 'react';
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

  return (
    <Container
      backgroundImage={name === 'All' ? placeholderAll : picture}
      onClick={() => handleCurrentGenre(id)}
    >
      <Title>{name}</Title>
    </Container>
  );
};

export default Genres;
