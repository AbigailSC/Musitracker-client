import React from 'react';
import {
  AlbumCardContainer,
  AlbumCardImage,
  AlbumCardTitle,
  HStack,
  AlbumCardSubtitle,
  DotSpan
} from './AlbumCard.styles';

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
  const releaseDateFormatted = releaseDate.slice(0, 4);
  const TypeCapitalized =
    recordType.charAt(0).toUpperCase() + recordType.slice(1);
  return (
    <AlbumCardContainer>
      <AlbumCardImage src={img} alt={title} />
      <AlbumCardTitle>{title}</AlbumCardTitle>
      <HStack>
        <AlbumCardSubtitle>{releaseDateFormatted}</AlbumCardSubtitle>
        <DotSpan />
        <AlbumCardSubtitle>{TypeCapitalized}</AlbumCardSubtitle>
      </HStack>
    </AlbumCardContainer>
  );
};

export default AlbumCard;
