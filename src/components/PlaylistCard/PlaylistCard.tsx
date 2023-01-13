import { useCustomDispatch } from '@hooks/redux';
import { getPlaylistById } from '@redux/slices/music';
import React from 'react';
import { Link } from 'react-router-dom';
import { PlaylisCardContainer, PlaylistCardImg } from './PlaylistCard.styles';

interface IProps {
  id: number;
  title: string;
  img: string;
  onClick?: () => void;
}

const PlaylistCard: React.FC<IProps> = ({ id, title, img }) => {
  const dispatch = useCustomDispatch();

  const handleClick = (id: number): void => {
    dispatch(getPlaylistById(id));
  };

  return (
    <PlaylisCardContainer onClick={() => handleClick(id)}>
      <Link to={`/playlist/${id}`}>
        <PlaylistCardImg src={img} alt={title} />
      </Link>
    </PlaylisCardContainer>
  );
};

export default PlaylistCard;
