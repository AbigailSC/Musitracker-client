import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import React from 'react';
import { useCustomSelector } from '../../hooks/redux';
import { ArtistContainer, ArtistHeader, Title, HStack } from './Artist.styles';
import { FiExternalLink } from 'react-icons/fi';

const Artist: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const artist = musicSlice.currentArtist;
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <p>loading</p>
          ) : (
            <ArtistContainer>
              {artist !== null && (
                <ArtistHeader backgroundImg={artist.picture_xl}>
                  <HStack>
                    <Title>{artist.name}</Title>
                    <a href={artist.link} target="_blank" rel="noreferrer">
                      <FiExternalLink className="icon" />
                    </a>
                  </HStack>
                </ArtistHeader>
              )}
            </ArtistContainer>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Artist;
