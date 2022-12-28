import React from 'react';
import {
  PlaylisCardContainer,
  PlaylistCardImg,
  Title
} from './PlaylistCard.styles';

interface IProps {
  id: number;
  title: string;
  nbTracks: number;
  img: string;
  tracklist: string;
  onClick?: () => void;
}

const PlaylistCard: React.FC<IProps> = ({
  id,
  title,
  nbTracks,
  img,
  tracklist
}) => {
  return (
    <PlaylisCardContainer>
      <PlaylistCardImg src={img} alt={title} />
      <Title>{title}</Title>
    </PlaylisCardContainer>
  );
};

export default PlaylistCard;
