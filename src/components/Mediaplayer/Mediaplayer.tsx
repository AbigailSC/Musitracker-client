/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import {
  MediaPlayerContainer,
  MediaPlayerImg,
  HStack,
  Stack,
  PlayButton,
  ProgressBar
} from './Mediaplayer.styles';
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
// import changeOpacityColor from '../../utils/changeOpacityColor';
import calculateTime from '../../utils/calculateTime';

const Mediaplayer: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const currentMusic = musicSlice.currentSong;
  // const allMusic = musicSlice.musicFiltered;
  const [isLiked, setIsLiked] = useState(false);
  const [dataCurrentMusic, setDataCurrentMusic] = useState({});
  // const [dataAllMusic, setDataAllMusic] = useState([]);
  // const [count, setCount] = useState(0);

  const currentAudio = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);
  // const volumeBar = useRef();

  useEffect(() => {
    if (currentAudio.current !== null) {
      currentAudio.current.play();
      currentAudio.current.volume = 0.1;
    }
  }, [currentMusic]);

  // useEffect(() => {
  //   setDataAllMusic(Object.values(allMusic));
  // }, [allMusic]);
  const handlePlayPause = (): void => {
    if (currentAudio.current !== null) {
      if (currentAudio.current.paused) {
        currentAudio.current.play();
      } else {
        currentAudio.current.pause();
      }
    }
  };

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  const handlePlay = (): void => {
    const timeDuration = Math.floor(currentAudio?.current?.duration as number);
    const currentTime = Math.floor(
      currentAudio?.current?.currentTime as number
    );
    // setIsLiked(!isLiked);
    setDataCurrentMusic({
      current: calculateTime(currentTime),
      length: calculateTime(timeDuration)
    });
    if (progressBar.current !== null) {
      progressBar.current.value = currentTime.toString();
      progressBar.current.max = timeDuration.toString();
    }
  };

  const handleCurrentTime = (): void => {
    if (currentAudio.current !== null) {
      currentAudio.current.currentTime = parseInt(
        progressBar?.current?.value as string
      );
    }
  };

  console.log(dataCurrentMusic);

  return (
    <MediaPlayerContainer>
      <audio
        ref={currentAudio}
        src={currentMusic?.preview}
        onTimeUpdate={handlePlay}
      ></audio>
      <HStack>
        <MediaPlayerImg
          background={musicSlice.currentDominantColor}
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
        <Stack>
          <HStack>
            <IoShuffle />
            <IoPlaySkipBackOutline />
            <PlayButton onClick={() => handlePlayPause()}>
              {currentAudio.current?.paused ?? false ? <FaPlay /> : <FaPause />}
            </PlayButton>
            <IoPlaySkipForwardOutline />
            <IoRepeat />
          </HStack>

          <ProgressBar
            background={musicSlice.currentDominantColor}
            type="range"
            defaultValue="0"
            step="1"
            ref={progressBar}
            className="progress"
            onChange={() => handleCurrentTime()}
          />
        </Stack>
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
