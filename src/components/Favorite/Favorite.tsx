import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Button } from './Favorite.styles';
import { addMusicFav } from '@redux/slices/favorites/index';
import { useCustomDispatch } from '@hooks/redux';
import { IMusicSearched } from '@redux/slices/music/types';

export interface IContainerFav {
  obj: IMusicSearched;
}

const Favorite: React.FC<IContainerFav> = ({ obj }) => {
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
