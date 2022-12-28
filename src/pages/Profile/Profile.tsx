import React from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileName,
  ProfileEmail,
  ProfileBody,
  Stack,
  StackTitle
} from './Profile.styles';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
import { useCustomSelector } from '@hooks/redux';

const Profile: React.FC = () => {
  const { userSlice } = useCustomSelector((state) => state);
  const user = userSlice.userInfo;
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          <ProfileContainer>
            <ProfileHeader>
              <ProfileImage src={user?.imageProfile} alt={user?.username} />
              <Stack>
                <ProfileName>{user?.username}</ProfileName>
                <ProfileEmail>{user?.email}</ProfileEmail>
              </Stack>
            </ProfileHeader>
            <ProfileBody>
              <StackTitle>Favorites</StackTitle>
              <StackTitle>Recently Played</StackTitle>
            </ProfileBody>
          </ProfileContainer>
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Profile;
