/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from '@components/Sidebar/Sidebar';
import React from 'react';
import { Section } from './Home.styles';
// import { useCustomSelector } from '../../hooks/redux/index';
// import { useCustomDispatch } from '../../hooks/redux';

const Home: React.FC = () => {
  return (
    <Section>
      <Sidebar />
    </Section>
  );
};

export default Home;
