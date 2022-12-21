import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import React from 'react';
import { useCustomSelector } from '../../hooks/redux';

const Artist: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? <p>loading</p> : <p>Artist</p>}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Artist;
