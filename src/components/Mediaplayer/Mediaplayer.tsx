import React, { useState } from 'react';
import {
  MediaPlayerContainer,
  MediaPlayerImg,
  HStack,
  Stack,
  VolumeLine,
  PlayButton
} from './Mediaplayer.styles';
import { FaPlay, FaPause } from 'react-icons/fa';
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoRepeat,
  IoShuffle,
  IoVolumeMediumOutline
} from 'react-icons/io5';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Mediaplayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  const handlePlay = (): void => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  return (
    <MediaPlayerContainer>
      <HStack>
        <MediaPlayerImg src="" alt="" />
        <Stack>
          <h3>name</h3>
          <h4>Artist</h4>
        </Stack>
      </HStack>
      <HStack>
        <IoShuffle />
        <IoPlaySkipBackOutline />
        <PlayButton onClick={handlePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </PlayButton>
        <IoPlaySkipForwardOutline />
        <IoRepeat />
      </HStack>
      <HStack>
        {isLiked ? (
          <AiFillHeart onClick={handleLike} />
        ) : (
          <AiOutlineHeart onClick={handleLike} />
        )}
        <IoVolumeMediumOutline />
        <VolumeLine />
      </HStack>
    </MediaPlayerContainer>
  );
};

export default Mediaplayer;
