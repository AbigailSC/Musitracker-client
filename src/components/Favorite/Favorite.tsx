import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Button } from './Favorite.styles';
// import { useCustomSelector } from '@hooks/redux';

const Favorite: React.FC = () => {
  // const { favorites } = useCustomSelector((state) => state);
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleFavorite = (): void => {
    setFavorite(!favorite);
  };
  return (
    <Button onClick={() => handleFavorite()}>
      {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </Button>
  );
};

export default Favorite;
