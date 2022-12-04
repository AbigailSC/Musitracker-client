/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Container,
  HStack,
  Figure,
  Stack,
  HeaderText,
  Icon
} from './Card.styles';
import { AiOutlineHeart } from 'react-icons/ai';
import getAverageColor from '../../utils/getAverageColor';
import { getCurrentSong } from '../../redux/slices/music/index';
import { useCustomDispatch } from '../../hooks/redux/index';

interface IProps {
  title: string,
  artist: string,
  album: string;
  duration: number;
  img: string;
  index: number;
  preview: string;
  onClick?: (song: React.MouseEvent<HTMLElement>) => void,
}

const Card: React.FC<IProps> = ({ title, artist, album, duration, img, index, preview }) => {
  // AiFillHeart
  const dispatch = useCustomDispatch();
  const [color, setColor] = useState<string>('');
  const durationTimeMinutes = Math.floor(duration / 60);
  const durationTimeSeconds = duration % 60;
  const getColor = async (img: string): Promise<void> => {
    const color = await getAverageColor(img);
    setColor(color);
  };
  getColor(img);
  const handleCurrentSong = (song: string): any => {
    console.log(song);
    dispatch(getCurrentSong(song));
  };
  console.log(color);
  return (
    <Container color={'rgba(75, 85, 99, 0.27)'} bgColor={'#000'}>
      <HStack>
        <p>#{index}</p>
        <Figure bgImage={img !== null ? img : "https://via.placeholder.com/800x800?text=Not+Found"}></Figure>
        <Stack>
          <HeaderText onClick={() => handleCurrentSong(preview)} className="title">{title}</HeaderText>
          <HeaderText color={'#919499'} cursor={'pointer'} className="hover">
            {artist}
          </HeaderText>
        </Stack>
      </HStack>
      <HStack>
        <HeaderText cursor={'pointer'} className="hover">
          {album}
        </HeaderText>
      </HStack>
      <HStack>
        <Icon>
          <AiOutlineHeart />
        </Icon>
        <h3>
          {`${durationTimeMinutes}:${durationTimeSeconds > 10
            ? durationTimeSeconds
            : `0${durationTimeSeconds}`
            }`}
        </h3>
      </HStack>
    </Container>
  );
};

export default Card;
