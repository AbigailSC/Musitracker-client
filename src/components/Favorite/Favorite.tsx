import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Button } from './Favorite.styles';
import { addMusicFav } from '@redux/slices/favorites/index';
import { addLiked } from '@redux/slices/music/index';
import { useCustomDispatch } from '@hooks/redux';
import { IProps } from '@components/Card/Card';

interface IFavorite {
  obj: IProps;
}

const Favorite: React.FC<IFavorite> = ({ obj }) => {
  // const { favorites } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleFavorite = (): void => {
    dispatch(addLiked(obj.obj.id)).then(() => {
      dispatch(addMusicFav(obj));
    });
  };

  return (
    <Button onClick={() => handleFavorite()}>
      {obj.obj.liked ? <AiFillHeart /> : <AiOutlineHeart />}
    </Button>
  );
};

export default Favorite;
