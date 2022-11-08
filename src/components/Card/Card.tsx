import React from 'react';
import {
  Container,
  HStack,
  Figure,
  Stack,
  HeaderText,
  SkeletonFigure
} from './Card.styles';
import { AiOutlineHeart } from 'react-icons/ai';
// AiFillHeart
const Card: React.FC = () => {
  const aux =
    'https://cdns-images.dzcdn.net/images/cover/a16e1c987f2b672fb7734b41ac3e1366/264x264.jpg';
  return typeof aux === 'number' ? (
    <Container color={'rgba(75, 85, 99, 0.27)'} bgColor={'#000'}>
      <HStack>
        <p>1</p>
        <Figure bgImage={aux}></Figure>
        <Stack>
          <HeaderText>Starlight</HeaderText>
          <HeaderText color={'#919499'} cursor={'pointer'} className="hover">
            Dreamcatcher
          </HeaderText>
          <img src={aux} alt="something" style={{ display: 'none' }} />
        </Stack>
      </HStack>
      <HStack>
        <HeaderText cursor={'pointer'} className="hover">
          Dystopia
        </HeaderText>
      </HStack>
      <HStack>
        <AiOutlineHeart />
        <h3>3:48</h3>
      </HStack>
    </Container>
  ) : (
    <Container color={'rgba(75, 85, 99, 0.27)'} bgColor={'#000'}>
      <HStack>
        <p>1</p>
        <SkeletonFigure width={'4em'} heigth={'4em'} />
        <Stack>
          <SkeletonFigure width={'10em'} heigth={'1em'} />
          <SkeletonFigure width={'14em'} heigth={'1em'} />
          <img src={aux} alt="something" style={{ display: 'none' }} />
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

export default Card;
