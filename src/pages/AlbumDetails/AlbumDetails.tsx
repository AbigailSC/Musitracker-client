import React, { useState } from 'react';
import { useCustomSelector } from '../../hooks/redux';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import {
  ArtistContainer,
  SkeletonFigure,
  HStack
} from '../Artist/Artist.styles';
import {
  AlbumHeader,
  AlbumImg,
  AlbumHeaderInfo,
  Text,
  Dot,
  AlbumHeaderImgArtist
} from './AlbumDetails.styles';
import getAverageColor from '@utils/getAverageColor';
import getTotalTime from '@utils/getTotalTime';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';

const AlbumDetails: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const { musicSlice } = useCustomSelector((state) => state);
  const albumDetails = musicSlice.currentAlbum;
  const date = albumDetails?.release_date.slice(0, 4);
  const time = getTotalTime(albumDetails?.duration_total as number);
  const getColor = async (img: string): Promise<void> => {
    const color = await getAverageColor(img);
    setColor(color);
  };
  getColor(albumDetails?.cover_big as string);
  console.log(albumDetails?.tracks);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <ArtistContainer>
              <SkeletonFigure width="100%" heigth="420px" />
            </ArtistContainer>
          ) : (
            <ArtistContainer>
              {albumDetails !== null && (
                <AlbumHeader backgroundColor={color}>
                  <AlbumImg
                    src={albumDetails.cover_big}
                    alt={albumDetails.title}
                  />
                  <AlbumHeaderInfo>
                    <Text color="#fff" weight="700" size="1em">
                      {albumDetails.record_type}
                    </Text>
                    <Text color="#fff" weight="700" size="3em">
                      {albumDetails.title}
                    </Text>
                    <HStack>
                      <AlbumHeaderImgArtist
                        src={albumDetails.artist.picture_xl}
                      />
                      <Text color="#fff" weight="700" size="1em">
                        {albumDetails.artist.name}
                      </Text>
                      <Dot />
                      <Text color="#fff" weight="400" size="1em">
                        {date}
                      </Text>
                      <Dot />
                      <Text color="#d4d4ea" weight="400" size="1em">
                        {albumDetails.tracklist.length} songs, {time}
                      </Text>
                    </HStack>
                  </AlbumHeaderInfo>
                </AlbumHeader>
              )}
              holaaa
            </ArtistContainer>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default AlbumDetails;
