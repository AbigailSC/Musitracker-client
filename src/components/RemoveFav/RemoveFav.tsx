import React from 'react';
import { Button } from '@components/Favorite/Favorite.styles';
import { AiOutlineDelete } from 'react-icons/ai';
import { useCustomDispatch } from '@hooks/redux';
import { removeMusicFav } from '@redux/slices/favorites/index';
import { IContainerFav } from '@components/Favorite/Favorite';
import Swal from 'sweetalert2';

const RemoveFav: React.FC<IContainerFav> = ({ obj }) => {
  const dispatch = useCustomDispatch();

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

  const handleFavorite = (): void => {
    dispatch(removeMusicFav(obj)).then(() => {
      Toast.fire({
        icon: 'error',
        title: 'Successfully removed'
      });
    });
  };
  return (
    <Button onClick={() => handleFavorite()}>
      <AiOutlineDelete />
    </Button>
  );
};

export default RemoveFav;
