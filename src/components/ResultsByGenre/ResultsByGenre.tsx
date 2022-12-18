import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import React from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from './ResultsByGenre.styles';

const ResultsByGenre: React.FC = () => {
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          <p>hola</p>
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default ResultsByGenre;
