import React from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
import { useCustomSelector } from '@hooks/redux/index';
import { Text } from './Playlist.styles';

const Playlist: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const { currentPlaylist } = musicSlice;
  console.log(currentPlaylist);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          <Text>Playlist</Text>
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Playlist;
