import React from 'react';
import { Button } from '@components/Favorite/Favorite.styles';
import { AiOutlineDelete } from 'react-icons/ai';
import { useCustomDispatch } from '@hooks/redux';
import { removeMusicFav } from '@redux/slices/favorites/index';
import { IContainerFav } from '@components/Favorite/Favorite';

const RemoveFav: React.FC<IContainerFav> = ({ obj }) => {
  const dispatch = useCustomDispatch();

  const handleFavorite = (): void => {
    dispatch(removeMusicFav(obj));
  };
  return (
    <Button onClick={() => handleFavorite()}>
      <AiOutlineDelete />
    </Button>
  );
};

export default RemoveFav;
