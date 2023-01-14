import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Button } from './Favorite.styles';
import { addMusicFav } from '@redux/slices/favorites/index';
import { useCustomDispatch } from '@hooks/redux';
import { IMusicSearched } from '@redux/slices/music/types';
import Swal from 'sweetalert2';

export interface IContainerFav {
  obj: IMusicSearched;
}

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

const Favorite: React.FC<IContainerFav> = ({ obj }) => {
  const dispatch = useCustomDispatch();
  const handleFavorite = (): void => {
    dispatch(addMusicFav(obj)).then(() => {
      Toast.fire({
        icon: 'success',
        title: 'Successfully added'
      });
    });
  };

  return (
    <Button onClick={() => handleFavorite()}>
      <AiOutlineHeart />
      {/* {obj.obj.liked ? <AiFillHeart /> : <AiOutlineHeart />} */}
    </Button>
  );
};

export default Favorite;
