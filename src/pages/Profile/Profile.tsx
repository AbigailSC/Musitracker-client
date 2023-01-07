import React, { useEffect } from 'react';
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
import { useCustomDispatch, useCustomSelector } from '@hooks/redux';
import { addFavorite } from '@redux/slices/favorites/index';

const Profile: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { userSlice } = useCustomSelector((state) => state);
  const { auth } = useCustomSelector((state) => state);
  const user = userSlice.userInfo;
  useEffect(() => {
    dispatch(
      addFavorite(
        {
          idTitle: 1272477112,
          idUser: '63b9ed562a8ebeab8231e5d3',
          active: true
        },
        auth.accessToken as string
      )
    );
  }, [auth.accessToken, dispatch]);

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
