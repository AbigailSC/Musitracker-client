import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import React from 'react';
import { useCustomSelector } from '../../hooks/redux';
import {
  ArtistContainer,
  ArtistHeader,
  Title,
  HStack,
  Subtitle,
  SkeletonFigure,
  AlbumCardContainer
} from './Artist.styles';
import { FiExternalLink } from 'react-icons/fi';
import AlbumCard from '@components/AlbumCard';
import { IArtistAlbums } from '../../redux/slices/music/index';

const Artist: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const artist = musicSlice.currentArtist;
  const artistAlbums = musicSlice.artistAlbums;

  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <SkeletonFigure width="100%" heigth="420px" />
          ) : (
            <ArtistContainer>
              {artist !== null && (
                <ArtistHeader backgroundImg={artist.picture_xl}>
                  <HStack>
                    <Title>{artist.name}</Title>
                    <a
                      href={artist.link}
                      target="_blank"
                      rel="noreferrer"
                      className="anchor"
                    >
                      <FiExternalLink className="icon" />
                    </a>
                  </HStack>
                  <Subtitle>{artist.nb_fan} fans</Subtitle>
                </ArtistHeader>
              )}
              <AlbumCardContainer>
                {artistAlbums instanceof Array &&
                  artistAlbums.map((album: IArtistAlbums) => (
                    <AlbumCard
                      key={album.id}
                      id={album.id}
                      title={album.title}
                      recordType={album.record_type}
                      releaseDate={album.release_date}
                      img={album.cover_big}
                    />
                  ))}
              </AlbumCardContainer>
            </ArtistContainer>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Artist;
