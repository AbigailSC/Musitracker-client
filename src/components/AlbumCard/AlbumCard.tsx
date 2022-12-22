import React from 'react';
import {
  AlbumCardContainer,
  AlbumCardImage,
  AlbumCardTitle,
  HStack,
  AlbumCardSubtitle,
  DotSpan
} from './AlbumCard.styles';
import { useCustomDispatch } from '../../hooks/redux/index';
import { getCurrentAlbum } from '../../redux/slices/music/index';
import { Link } from 'react-router-dom';

interface IProps {
  id: number;
  title: string;
  img: string;
  releaseDate: string;
  recordType: string;
  key: number;
  onClick?: () => void;
}

const AlbumCard: React.FC<IProps> = ({
  id,
  title,
  img,
  releaseDate,
  recordType
}) => {
  const dispatch = useCustomDispatch();
  const releaseDateFormatted = releaseDate.slice(0, 4);
  const TypeCapitalized =
    recordType.charAt(0).toUpperCase() + recordType.slice(1);

  const handleCurrentAlbum = (albumId: number): void => {
    dispatch(getCurrentAlbum(albumId));
  };
  return (
    <AlbumCardContainer>
      <AlbumCardImage src={img} alt={title} />
      <Link to={`/album/${id}`} className="anchor">
        <AlbumCardTitle onClick={() => handleCurrentAlbum(id)}>
          {title}
        </AlbumCardTitle>
      </Link>
      <HStack>
        <AlbumCardSubtitle>{releaseDateFormatted}</AlbumCardSubtitle>
        <DotSpan />
        <AlbumCardSubtitle>{TypeCapitalized}</AlbumCardSubtitle>
      </HStack>
    </AlbumCardContainer>
  );
};

export default AlbumCard;
