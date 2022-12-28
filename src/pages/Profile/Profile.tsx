import React from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
import { useCustomSelector } from '../../hooks/redux';

const Profile: React.FC = () => {
  const { userSlice } = useCustomSelector((state) => state);
  console.log(userSlice.userInfo);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>Profile</SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Profile;
