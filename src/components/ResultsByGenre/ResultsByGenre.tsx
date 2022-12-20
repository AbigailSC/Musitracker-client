import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import React from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft,
  Header
} from './ResultsByGenre.styles';
import { useParams } from 'react-router-dom';
import { useCustomSelector } from '../../hooks/redux/index';

const ResultsByGenre: React.FC = () => {
  const { genre } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);

  console.log(musicSlice.currentGenre);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          <Header>{genre}</Header>
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default ResultsByGenre;
