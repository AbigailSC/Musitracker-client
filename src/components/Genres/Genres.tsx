import React from 'react';
import { Container } from './Genres.styles';

interface IProps {
  name: string;
  picture: string;
  key: number;
}

const Genres: React.FC<IProps> = ({ name, picture }) => {
  return <Container backgroundImage={picture}>{name}</Container>;
};

export default Genres;
