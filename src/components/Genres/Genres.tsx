import React from 'react';
import { Container, Title } from './Genres.styles';

interface IProps {
  name: string;
  picture: string;
  key: number;
}

const Genres: React.FC<IProps> = ({ name, picture }) => {
  const placeholderAll = 'https://f4.bcbits.com/img/a2068923191_16.jpg';
  return (
    <Container backgroundImage={name === 'All' ? placeholderAll : picture}>
      <Title>{name}</Title>
    </Container>
  );
};

export default Genres;
