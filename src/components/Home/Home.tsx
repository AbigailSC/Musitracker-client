/* eslint-disable react-hooks/exhaustive-deps */

import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar/Sidebar';

import React from 'react';
import { Section, SectionContent } from './Home.styles';
// import { useCustomSelector } from '../../hooks/redux/index';
// import { useCustomDispatch } from '../../hooks/redux';

const Home: React.FC = () => {
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
      </SectionContent>
    </Section>
  );
};

export default Home;
