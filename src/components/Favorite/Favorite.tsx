import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Button } from './Favorite.styles';
import { addMusicFav } from '@redux/slices/favorites/index';
import { useCustomDispatch } from '@hooks/redux';
import { IProps } from '@components/Card/Card';

interface IFavorite {
  obj: IProps;
}

const Favorite: React.FC<IFavorite> = ({ obj }) => {
  const dispatch = useCustomDispatch();
  const handleFavorite = (): void => {
    dispatch(addMusicFav(obj));
  };

  return (
    <Button onClick={() => handleFavorite()}>
      <AiOutlineHeart />
      {/* {obj.obj.liked ? <AiFillHeart /> : <AiOutlineHeart />} */}
    </Button>
  );
};

export default Favorite;
