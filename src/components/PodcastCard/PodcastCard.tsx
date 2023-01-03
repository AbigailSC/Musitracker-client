import React from 'react';
import { PodcastCardContainer, PodcastCardTitle } from './PodcastCard.styles';
import { FiExternalLink } from 'react-icons/fi';

interface IProps {
  title: string;
  id: number;
  picture: string;
  link: string;
  key: number;
  onClick?: () => void;
}

const PodcastCard: React.FC<IProps> = ({ id, title, picture, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="anchor">
      <PodcastCardContainer backgroundImage={picture}>
        <PodcastCardTitle>{title}</PodcastCardTitle>
        <FiExternalLink className="icon" />
      </PodcastCardContainer>
    </a>
  );
};

export default PodcastCard;
