import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
// import { useCustomSelector } from '@hooks/redux';

const Favorite: React.FC = () => {
  // const { favorites } = useCustomSelector((state) => state);
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleFavorite = (): void => {
    setFavorite(!favorite);
  };
  return (
    <button onClick={() => handleFavorite()}>
      {favorite ? <AiOutlineHeart /> : <AiFillHeart />}
    </button>
  );
};

export default Favorite;
