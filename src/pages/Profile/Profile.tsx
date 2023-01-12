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
import {
  addFavorite,
  removeFavorite,
  getFavorites
} from '@redux/slices/favorites/index';

const Profile: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { userSlice } = useCustomSelector((state) => state);
  const { auth } = useCustomSelector((state) => state);
  const user = userSlice.userInfo;

  const idUser = '63b9fa4850743147bcb8fcc1';
  const idFavorite = '63c040a3b6e4d09d3556f37b';
  const idTitle = 1272472232;

  useEffect(() => {
    dispatch(getFavorites(auth.accessToken as string, idUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleAddFavorite = (): void => {
    dispatch(
      addFavorite(
        {
          idTitle,
          idUser
        },
        auth.accessToken as string
      )
    );
  };

  const handleRemoveFavorite = (): void => {
    dispatch(removeFavorite(auth.accessToken as string, idFavorite, idUser));
  };

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
              <button onClick={handleAddFavorite}>add</button>
              <button onClick={handleRemoveFavorite}>remove</button>
            </ProfileBody>
          </ProfileContainer>
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Profile;
