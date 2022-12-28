import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import React from 'react';
import { useCustomSelector } from '@hooks/redux';
import {
  ArtistContainer,
  ArtistHeader,
  Title,
  HStack,
  Subtitle,
  SkeletonFigure,
  AlbumCardContainer,
  TopTracksContainer
} from './Artist.styles';
import { FiExternalLink } from 'react-icons/fi';
import AlbumCard from '@components/AlbumCard';
import TopCard from '@components/TopCard';
import { ITitle } from '@pages/Results/types';
import TopCardSkeleton from '@components/TopCardSkeleton/TopCardSkeleton';
import { IArtistAlbums } from '@redux/slices/music/types';

const Artist: React.FC = () => {
  const { musicSlice } = useCustomSelector((state) => state);
  const artist = musicSlice.currentArtist;
  const artistAlbums = musicSlice.artistAlbums;
  const topTracks = musicSlice.currentArtist?.topTracks;
  const skeletonFill = [1, 2, 3, 4, 5];
  // console.log(musicSlice.currentAlbum);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <ArtistContainer>
              <SkeletonFigure width="100%" heigth="420px" />
              <Title>Top songs</Title>
              {skeletonFill.map((item) => (
                <div key={item} className="cardSkeleton">
                  <TopCardSkeleton key={item} index={item + 1} />
                </div>
              ))}
              <AlbumCardContainer>
                {skeletonFill.map((item) => (
                  <div key={item} className="cardSkeleton">
                    <SkeletonFigure width="100%" heigth="300px" />
                    <SkeletonFigure width="80%" heigth="1.5em" />
                    <SkeletonFigure width="90%" heigth="1em" />
                  </div>
                ))}
              </AlbumCardContainer>
            </ArtistContainer>
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
              <Title>Top songs</Title>
              <TopTracksContainer>
                {topTracks instanceof Array &&
                  topTracks.map((track: ITitle, index) => (
                    <TopCard
                      key={track.id}
                      obj={track}
                      title={track.title}
                      duration={track.duration}
                      img={track.album.cover}
                      rank={track.rank}
                      index={index + 1}
                    />
                  ))}
              </TopTracksContainer>
              <Title>Discography</Title>
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
