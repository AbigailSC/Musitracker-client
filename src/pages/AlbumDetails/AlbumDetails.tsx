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
  Text
} from './AlbumDetails.styles';
import getAverageColor from '../../utils/getAverageColor';
import getTotalTime from '../../utils/getTotalTime';
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
  console.log(albumDetails);
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
                      <Text color="#fff" weight="700" size="1em">
                        {albumDetails.artist.name}
                      </Text>
                      <Text color="#fff" weight="400" size="1em">
                        {date}
                      </Text>
                      <Text color="#fff" weight="400" size="1em">
                        {albumDetails.tracklist.length} songs, {time}
                      </Text>
                    </HStack>
                  </AlbumHeaderInfo>
                </AlbumHeader>
              )}
            </ArtistContainer>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default AlbumDetails;
