import React, { useState } from 'react';
import { useCustomDispatch } from '@hooks/redux/index';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import getAverageColor from '@utils/getAverageColor';
import calculateTime from '@utils/calculateTime';
import numberWithCommas from '@utils/numberWithCommas';
import { getCurrentSong, getDominantColor } from '@redux/slices/music/index';
import { Container, Text, Image, HStack, Icon } from './TopCard.styles';
import { IMusicSearched } from '@redux/slices/music/types';

interface IProps {
  title: string;
  duration: number;
  img: string;
  index: number;
  rank: number;
  obj: IMusicSearched;
  onClick?: () => void;
}

const TopCard: React.FC<IProps> = ({
  title,
  duration,
  img,
  rank,
  obj,
  index
}) => {
  const dispatch = useCustomDispatch();
  const [color, setColor] = useState<string>('');
  const [liked, setLiked] = useState<boolean>(false);

  const getColor = async (img: string): Promise<void> => {
    const color = await getAverageColor(img);
    setColor(color);
  };

  const handleCurrentSong = (obj: IMusicSearched): void => {
    dispatch(getCurrentSong(obj));
  };

  const handleCurrentDominantColor = (color: string): void => {
    dispatch(getDominantColor(color));
  };

  const handleLike = (): void => {
    setLiked(!liked);
  };

  getColor(img);

  return (
    <Container>
      <HStack>
        <p>{index}</p>
        <Image
          src={
            img !== null
              ? img
              : 'https://via.placeholder.com/800x800?text=Not+Found'
          }
        />
        <Text
          cursor="pointer"
          onClick={() => {
            handleCurrentSong(obj);
            handleCurrentDominantColor(color);
          }}
        >
          {title}
        </Text>
      </HStack>
      <HStack>
        <Text>{numberWithCommas(rank)}</Text>
      </HStack>
      <HStack>
        <Icon onClick={() => handleLike()}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </Icon>
        <h3>{calculateTime(duration)}</h3>
      </HStack>
    </Container>
  );
};

export default TopCard;
