import React from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';

const Playlist: React.FC = () => {
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>Playlist</SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Playlist;
