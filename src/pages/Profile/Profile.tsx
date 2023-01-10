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
import { getFavoritesById } from '@redux/slices/music/index';

const Profile: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { userSlice } = useCustomSelector((state) => state);
  const { auth } = useCustomSelector((state) => state);
  const { favorites } = useCustomSelector((state) => state);
  const user = userSlice.userInfo;

  const idUser = '63b9fa4850743147bcb8fcc1';
  const idFavorite = '63bdd7788a63b3c8c240556d';

  useEffect(() => {
    dispatch(getFavorites(auth.accessToken as string, idUser));
    console.log('hola estoy aca');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleAddFavorite = (): void => {
    dispatch(
      addFavorite(
        {
          idTitle: 1433740852,
          idUser
        },
        auth.accessToken as string
      )
    );
  };

  const handleRemoveFavorite = (): void => {
    dispatch(removeFavorite(auth.accessToken as string, idFavorite, idUser));
  };

  const handleSearchByIdTitle = (idTitle: number): void => {
    dispatch(getFavoritesById(idTitle));
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
              {favorites.favorites.map((favorite, index) => (
                <button
                  key={index}
                  onClick={() => handleSearchByIdTitle(favorite.idTitle)}
                >
                  {favorite.idTitle}
                </button>
              ))}
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
