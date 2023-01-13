/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Container,
  HStack,
  Figure,
  Stack,
  HeaderText
} from './Card.styles';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import getAverageColor from '@utils/getAverageColor';
import calculateTime from '@utils/calculateTime';
import { useCustomDispatch } from '@hooks/redux/index';
import { Link } from 'react-router-dom';
import { IMusicSearched } from '@redux/slices/music/types';
import {
  getCurrentSong, getDominantColor, getCurrentAlbum, getCurrentArtist,
  getArtistAlbums
} from '@redux/slices/music/index';
import Favorite from '@components/Favorite';
import RemoveFav from '@components/RemoveFav';

export interface IProps {
  title: string,
  artist: string,
  album: string;
  duration: number;
  img: string;
  index: number;
  obj: IMusicSearched;
  onClick?: (song: React.MouseEvent<HTMLElement>) => void;
  active?: boolean | undefined;
}

const Card: React.FC<IProps> = ({ title, artist, album, duration, img, index, obj, active }) => {
  const dispatch = useCustomDispatch();
  const [color, setColor] = useState<string>('');
  // const [liked, setLiked] = useState<boolean>(false);

  const getColor = async (img: string): Promise<void> => {
    const color = await getAverageColor(img);
    setColor(color);
  };

  const handleCurrentSong = (obj: IMusicSearched): void => {
    dispatch(getCurrentSong(obj));
  };

  const handleCurrentDominantColor = (color: string): void => {
    dispatch(getDominantColor(color))
  }

  const handleCurrentAlbum = (albumId: number): void => {
    dispatch(getCurrentAlbum(albumId));
  };

  const handleArtistInfo = (): void => {
    dispatch(getCurrentArtist(obj.artist.id));
    dispatch(getArtistAlbums(obj.artist.id));
  };

  // const handleLike = (): void => {
  //   setLiked(!liked)
  // }

  getColor(img);

  return (
    <Container>
      <HStack>
        <p>{index}</p>
        <Figure bgImage={img !== null ? img : "https://via.placeholder.com/800x800?text=Not+Found"}></Figure>
        <Stack>
          <HeaderText onClick={() => { handleCurrentSong(obj); handleCurrentDominantColor(color) }} className="title">{title}</HeaderText>
          <Link to={`/artist/${obj.artist.id}`} style={{ textDecoration: "none" }}>
            <HeaderText color={'#919499'} cursor={'pointer'} className="hover" onClick={() => handleArtistInfo()}>
              {artist}
            </HeaderText>
          </Link>
        </Stack>
      </HStack>
      <HStack>
        <Link to={`/album/${obj.album.id}`} className="anchor">
          <HeaderText cursor={'pointer'} className="hover" onClick={() => handleCurrentAlbum(obj.album.id)}>
            {album}
          </HeaderText>
        </Link>
      </HStack>
      <HStack>
        {/* <Icon onClick={() => handleLike()}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </Icon> */}
        {active === undefined ? <Favorite obj={
          {
            title,
            artist,
            album,
            duration,
            img,
            index,
            obj
          }
        } /> : <RemoveFav obj={
          {
            title,
            artist,
            album,
            duration,
            img,
            index,
            obj
          }
        } />}
        <h3>
          {calculateTime(duration)}
        </h3>
      </HStack>
    </Container>
  );
};

export default Card;
