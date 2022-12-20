import React from 'react';
import { GenreCardContainer, Title, ImageArtist } from './GenreCard.styles';

interface IProps {
  artist: string;
  id: number;
  img: string;
  link: string;
  key: number;
  onClick?: (song: React.MouseEvent<HTMLElement>) => void;
}

const GenreCard: React.FC<IProps> = ({ artist, id, img, link, key }) => {
  return (
    <GenreCardContainer>
      <ImageArtist src={img} alt={artist} />
      <Title>{artist}</Title>
    </GenreCardContainer>
  );
};

export default GenreCard;
