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

// AiFillHeart
const Card: React.FC = ({ title, artist, album, duration, img, id, index }) => {

  const [color, setColor] = useState<string>('');
  const durationTimeMinutes = Math.floor(duration / 60);
  const durationTimeSeconds = duration % 60;
  const getColor = async (img: string): Promise<void> => {
    const color = await getAverageColor(img);
    setColor(color);
  };
  getColor(img);
  console.log(color, id);
  return (
    <Container color={'rgba(75, 85, 99, 0.27)'} bgColor={'#000'}>
      <HStack>
        <p>#{index}</p>
        <Figure bgImage={img}></Figure>
        <Stack>
          <HeaderText>{title}</HeaderText>
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
