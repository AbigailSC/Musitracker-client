/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import {
  MediaPlayerContainer,
  MediaPlayerImg,
  HStack,
  Stack,
  PlayButton
} from './Mediaplayer.styles';
import { Howl } from 'howler';
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoRepeat,
  IoShuffle,
  IoVolumeMediumOutline
} from 'react-icons/io5';
import { FaPlay, FaPause } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useCustomSelector } from '../../hooks/redux/index';

const Mediaplayer: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const currentMusic = musicSlice.currentSong;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const currentMusicAudio = new Howl({
    src: [currentMusic?.preview as string],
    volume: 0.5,
    html5: true,
    autoplay: false,
    onend: function () {
      setIsPlaying(false);
    }
  });

  useEffect(() => {
    currentMusicAudio.play();
    setIsPlaying(true);
    console.log('sonandoo');
    return () => {
      currentMusicAudio.stop();
      setIsPlaying(false);
      console.log('me juii');
    };
  }, [currentMusic?.preview]);

  const handlePlayPause = (): void => {
    setIsPlaying(!isPlaying);
    isPlaying ? currentMusicAudio.play() : currentMusicAudio.pause();
  };

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  // console.log(currentMusicAudio);
  return (
    <>
      <div>
        <input type="range" defaultValue="0" />
      </div>
      <MediaPlayerContainer>
        <HStack>
          <MediaPlayerImg
            src={currentMusic?.album.cover}
            alt={currentMusic?.title}
          />
          <Stack>
            <h3>{currentMusic?.title}</h3>
            <h4>{currentMusic?.artist.name}</h4>
          </Stack>
        </HStack>
        <HStack>
          <IoShuffle />
          <IoPlaySkipBackOutline />
          <PlayButton onClick={() => handlePlayPause()}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </PlayButton>
          <IoPlaySkipForwardOutline />
          <IoRepeat />
        </HStack>
        <HStack>
          {isLiked ? (
            <AiFillHeart onClick={() => handleLike()} />
          ) : (
            <AiOutlineHeart onClick={() => handleLike()} />
          )}
          <IoVolumeMediumOutline />
          {/* <input type="range" min="0" max="100" value="50" /> */}
        </HStack>
      </MediaPlayerContainer>
    </>
  );
};

export default Mediaplayer;
