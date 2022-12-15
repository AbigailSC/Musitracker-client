import React from 'react';
import { Container, Title } from './Genres.styles';

interface IProps {
  name: string;
  picture: string;
  key: number;
}

const Genres: React.FC<IProps> = ({ name, picture }) => {
  return (
    <Container backgroundImage={picture}>
      <Title>{name}</Title>
    </Container>
  );
};

export default Genres;
