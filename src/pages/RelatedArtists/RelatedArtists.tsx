import React from 'react';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import { useCustomSelector } from '@hooks/redux/index';
import Spinner from '@components/Spinner/Spinner';
import {
  Title,
  ArtistContainer,
  RelatedArtistsContainer
} from '@pages/Artist/Artist.styles';
import GenreCard from '@components/GenreCard';
import { IArtistSimilars } from '@redux/slices/music/types';

const RelatedArtists: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const relatedArtists = musicSlice.artistSimilars;

  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <Spinner />
          ) : (
            <ArtistContainer>
              <Title>Fans like it too</Title>
              <RelatedArtistsContainer>
                {relatedArtists instanceof Array &&
                  relatedArtists.map((artist: IArtistSimilars, index) => (
                    <GenreCard
                      artist={artist.name}
                      id={artist.id}
                      img={artist.picture_xl}
                      key={index}
                      link={artist.link}
                    />
                  ))}
              </RelatedArtistsContainer>
            </ArtistContainer>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default RelatedArtists;
