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

  const changeOpacityColor = (color: string): string => {
    const opacity = 0.5;
    const rgb = color
      .replace(/[^\d,]/g, '')
      .split(',')
      .map((n) => parseInt(n, 10));
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
  };

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

  console.log(musicSlice.currentDominantColor);
  const handlePlayPause = (): void => {
    setIsPlaying(!isPlaying);
    isPlaying ? currentMusicAudio.play() : currentMusicAudio.pause();
  };

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  // console.log(currentMusicAudio);
  return (
    <MediaPlayerContainer
      background={changeOpacityColor(musicSlice.currentDominantColor)}
    >
      {/* <div>
        <input type="range" defaultValue="0" />
      </div> */}
      <HStack>
        <MediaPlayerImg
          src={
            currentMusic !== null
              ? currentMusic?.album.cover
              : 'http://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png'
          }
          alt={currentMusic !== null ? currentMusic?.title : 'no music'}
        />
        <Stack>
          <h3>{currentMusic !== null ? currentMusic?.title : 'Title'}</h3>
          <h4>
            {currentMusic !== null ? currentMusic?.artist.name : 'Artist'}
          </h4>
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
  );
};

export default Mediaplayer;
