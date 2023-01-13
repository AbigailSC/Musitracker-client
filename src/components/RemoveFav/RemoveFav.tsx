import React from 'react';
import { Button } from '@components/Favorite/Favorite.styles';
import { AiOutlineDelete } from 'react-icons/ai';
import { useCustomDispatch } from '@hooks/redux';
import { removeMusicFav } from '@redux/slices/favorites/index';
import { IProps } from '@components/Card/Card';

interface IFavorite {
  obj: IProps;
}

const RemoveFav: React.FC<IFavorite> = ({ obj }) => {
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
