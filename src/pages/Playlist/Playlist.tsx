import React, { useState } from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
import { useCustomSelector } from '@hooks/redux/index';
import { TextPlaylist } from './Playlist.styles';
import {
  HStack as HStackResults,
  Text as TextResults
} from '@pages/Results/Results.styles';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import {
  ArtistContainer,
  HStack,
  SkeletonFigure
} from '@pages/Artist/Artist.styles';
import {
  AlbumHeader,
  AlbumHeaderImgArtist,
  AlbumHeaderInfo,
  AlbumImg,
  Dot,
  Text
} from '@pages/AlbumDetails/AlbumDetails.styles';
import getAverageColor from '@utils/getAverageColor';
import getTotalTime from '@utils/getTotalTime';

const Playlist: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const [color, setColor] = useState<string>('');
  const { currentPlaylist } = musicSlice;
  const time = getTotalTime(currentPlaylist?.duration as number);
  const name = currentPlaylist?.creator.name.split('-')[0];
  const getColor = async (img: string): Promise<void> => {
    const color = await getAverageColor(img);
    setColor(color);
  };
  getColor(currentPlaylist?.picture_xl as string);
  console.log(currentPlaylist);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          <TextPlaylist>Playlist</TextPlaylist>
          {musicSlice.isLoading ? (
            <ArtistContainer>
              <SkeletonFigure width="100%" heigth="420px" />
            </ArtistContainer>
          ) : (
            <ArtistContainer>
              {currentPlaylist !== null && (
                <AlbumHeader backgroundColor={color}>
                  <AlbumImg
                    src={currentPlaylist.picture_xl}
                    alt={currentPlaylist.title}
                  />
                  <AlbumHeaderInfo>
                    <Text color="#fff" weight="700" size="1em">
                      {currentPlaylist.public ?? false
                        ? 'Public Playlist'
                        : 'Private Playlist'}
                    </Text>
                    <HStack>
                      <Text color="#fff" weight="700" size="3em">
                        {currentPlaylist.title}
                      </Text>
                      <a
                        href={currentPlaylist.link}
                        target="_blank"
                        rel="noreferrer"
                        className="anchor"
                      >
                        <FiExternalLink />
                      </a>
                    </HStack>
                    <HStack>
                      <AlbumHeaderImgArtist src={currentPlaylist.picture_xl} />
                      <Text color="#fff" weight="700" size="1em">
                        {name}
                      </Text>
                      <Dot />
                      <Text color="#fff" weight="400" size="1em">
                        {currentPlaylist.fans}
                      </Text>
                      <Dot />
                      <Text color="#d4d4ea" weight="400" size="1em">
                        {currentPlaylist.nb_tracks} songs, {time}
                      </Text>
                    </HStack>
                  </AlbumHeaderInfo>
                </AlbumHeader>
              )}
              <HStackResults>
                <TextResults width="50%">
                  <span>#</span>
                  <div />
                  <h3>Title</h3>
                </TextResults>
                <TextResults width="40%">
                  <h3>Album</h3>
                </TextResults>
                <TextResults width="10%">
                  <AiOutlineClockCircle />
                </TextResults>
              </HStackResults>
            </ArtistContainer>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Playlist;
