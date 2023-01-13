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
import Card from '@components/Card';
import { ITitle } from '@pages/Results/types';

const Profile: React.FC = () => {
  const { userSlice } = useCustomSelector((state) => state);
  const { favorites } = useCustomSelector((state) => state);
  const user = userSlice.userInfo;
  const favoritesSongs = favorites.musicFav;

  console.log(favoritesSongs);

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
              {favoritesSongs === undefined ? (
                <p>loading</p>
              ) : (
                favoritesSongs instanceof Array &&
                favoritesSongs.map((card: ITitle, index: number) => (
                  <Card
                    key={index}
                    obj={card}
                    title={card.title}
                    artist={card.artist.name}
                    album={card.album.title}
                    duration={card.duration}
                    img={card.album.cover}
                    index={index + 1}
                    active={true}
                  />
                ))
              )}
            </ProfileBody>
          </ProfileContainer>
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Profile;
