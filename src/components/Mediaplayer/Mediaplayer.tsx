/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from 'react';
import {
  MediaPlayerContainer,
  MediaPlayerImg,
  HStack,
  Stack,
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement>(null);

  const handlePlay = (): void => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <input type="range" min="0" max="100" value="0" />
      <audio ref={audioPlayer}>
        <source src="https://cdns-preview-1.dzcdn.net/stream/c-1716d25d642ca282f898263932852643-4.mp3" />
      </audio>
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
            {isPlaying ? <FaPlay /> : <FaPause />}
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
          <input type="range" min="0" max="100" value="50" />
        </HStack>
      </MediaPlayerContainer>
    </>
  );
};

export default Mediaplayer;
