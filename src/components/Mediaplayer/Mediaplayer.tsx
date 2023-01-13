/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import {
  MediaPlayerContainer,
  MediaPlayerImg,
  HStack,
  Stack,
  PlayButton,
  ProgressBar,
  MediaPlayerContent,
  PlayerContainer
} from './Mediaplayer.styles';
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoRepeat,
  IoShuffle,
  IoVolumeMediumOutline
} from 'react-icons/io5';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux/index';
import calculateTime from '@utils/calculateTime';
import { getCurrentArtist, getArtistAlbums } from '@redux/slices/music/index';
import { Link } from 'react-router-dom';
import Favorite from '@components/Favorite';

interface Props {
  current?: string;
  length?: string;
}

const Mediaplayer: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { musicSlice } = useCustomSelector((state) => state);
  const currentMusic = musicSlice.currentSong;
  // const allMusic = musicSlice.musicFiltered;
  const [dataCurrentMusic, setDataCurrentMusic] = useState<Props>({});
  // const [dataAllMusic, setDataAllMusic] = useState([]);
  // const [count, setCount] = useState(0);

  const currentAudio = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);
  const volumeBar = useRef<HTMLInputElement>(null);

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

  const handleArtistInfo = (): void => {
    dispatch(getCurrentArtist(currentMusic?.artist.id as number));
    dispatch(getArtistAlbums(currentMusic?.artist.id as number));
  };

  const handleVolume = (): void => {
    if (currentAudio.current !== null) {
      currentAudio.current.volume =
        (volumeBar.current?.value as unknown as number) / 10;
    }
  };
  return (
    <MediaPlayerContainer>
      <audio
        ref={currentAudio}
        src={currentMusic?.preview}
        onTimeUpdate={handlePlay}
      />
      <MediaPlayerContent>
        <MediaPlayerImg
          background={musicSlice.currentDominantColor}
          active={currentAudio.current?.paused ?? false}
          src={
            currentMusic !== null
              ? currentMusic?.album.cover
              : 'http://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png'
          }
          alt={currentMusic !== null ? currentMusic?.title : 'no music'}
        />
        <Stack>
          <h3>{currentMusic !== null ? currentMusic?.title : 'Title'}</h3>
          {currentMusic !== null && (
            <Link
              to={`/artist/${currentMusic?.artist.id}`}
              className="anchor"
              style={{ textDecoration: 'none' }}
            >
              <h4 onClick={() => handleArtistInfo()} aria-hidden="true">
                {currentMusic?.artist.name}
              </h4>
            </Link>
          )}
        </Stack>
      </MediaPlayerContent>
      <MediaPlayerContent>
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
          <PlayerContainer>
            <p>{dataCurrentMusic.current}</p>
            <ProgressBar
              background={musicSlice.currentDominantColor}
              active={currentAudio.current?.paused ?? false}
              type="range"
              defaultValue="0"
              step="1"
              ref={progressBar}
              onChange={() => handleCurrentTime()}
            />
            <p>{dataCurrentMusic.length}</p>
          </PlayerContainer>
        </Stack>
      </MediaPlayerContent>
      <MediaPlayerContent>
        {currentMusic != null && <Favorite obj={currentMusic} />}
        <IoVolumeMediumOutline className="volumeIcon" />
        {currentAudio.current !== null && (
          <input
            type="range"
            min="0"
            max="10"
            defaultValue="5"
            ref={volumeBar}
            onChange={() => handleVolume()}
          />
        )}
        {/* <input type="range" min="0" max="100" value="50" /> */}
      </MediaPlayerContent>
    </MediaPlayerContainer>
  );
};

export default Mediaplayer;
