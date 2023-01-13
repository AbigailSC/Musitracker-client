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
import { IFavs } from '@pages/Results/types';

const Profile: React.FC = () => {
  const { userSlice } = useCustomSelector((state) => state);
  const { favorites } = useCustomSelector((state) => state);
  const user = userSlice.userInfo;
  const favoritesSongs = favorites.musicFav;

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
              {favoritesSongs instanceof Array &&
                favoritesSongs.map((card: IFavs, index: number) => (
                  <Card
                    key={card.obj.id}
                    obj={card.obj}
                    title={card.obj.title}
                    artist={card.obj.artist.name}
                    album={card.obj.album.title}
                    duration={card.obj.duration}
                    img={card.obj.album.cover}
                    index={index + 1}
                    active={true}
                  />
                ))}
            </ProfileBody>
          </ProfileContainer>
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Profile;
