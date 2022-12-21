import React from 'react';
import {
  getCurrentArtist,
  getArtistAlbums
} from '../../redux/slices/music/index';
import { useCustomDispatch } from '../../hooks/redux';
import { GenreCardContainer, Title, ImageArtist } from './GenreCard.styles';
import { Link } from 'react-router-dom';

interface IProps {
  artist: string;
  id: number;
  img: string;
  link: string;
  key: number;
  onClick?: () => void;
}

const GenreCard: React.FC<IProps> = ({ artist, id, img }) => {
  const dispatch = useCustomDispatch();
  const handleArtistInfo = (): void => {
    dispatch(getCurrentArtist(id));
    dispatch(getArtistAlbums(id));
  };
  return (
    <GenreCardContainer>
      <ImageArtist src={img} alt={artist} />
      <Link to={`/artist/${id}`} className="anchor">
        <Title onClick={() => handleArtistInfo()}>{artist}</Title>
      </Link>
    </GenreCardContainer>
  );
};

export default GenreCard;
