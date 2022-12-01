import {
  Container,
  HStack,
  SkeletonFigure,
  Stack
} from '@components/Card/Card.styles';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CardSkeleton: React.FC = ({ index }) => {
  return (
    <Container color={'rgba(75, 85, 99, 0.27)'} bgColor={'#000'}>
      <HStack>
        <p>{index}</p>
        <SkeletonFigure width={'4em'} heigth={'4em'} />
        <Stack>
          <SkeletonFigure width={'10em'} heigth={'1em'} />
          <SkeletonFigure width={'14em'} heigth={'1em'} />
        </Stack>
      </HStack>
      <HStack>
        <SkeletonFigure width={'10em'} heigth={'1em'} />
      </HStack>
      <HStack>
        <AiOutlineHeart />
        <SkeletonFigure width={'3em'} heigth={'1em'} />
      </HStack>
    </Container>
  );
};

export default CardSkeleton;
