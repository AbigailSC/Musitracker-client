import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft
} from '@pages/Home/Home.styles';
import React, { useEffect } from 'react';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux';
import {
  ArtistContainer,
  ArtistHeader,
  Title,
  HStack,
  Subtitle,
  SkeletonFigure,
  AlbumCardContainer,
  TopTracksContainer,
  RelatedArtistsContainer
} from './Artist.styles';
import { FiExternalLink } from 'react-icons/fi';
import AlbumCard from '@components/AlbumCard';
import TopCard from '@components/TopCard';
import { ITitle } from '@pages/Results/types';
import TopCardSkeleton from '@components/TopCardSkeleton/TopCardSkeleton';
import { IArtistAlbums, IArtistSimilars } from '@redux/slices/music/types';
import { getRelatedArtists } from '@redux/slices/music/index';
import { Link, useParams } from 'react-router-dom';
import GenreCard from '@components/GenreCard';

const Artist: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { idArtist } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);
  const artist = musicSlice.currentArtist;
  const artistAlbums = musicSlice.artistAlbums;
  const topTracks = musicSlice.currentArtist?.topTracks;
  const skeletonFill = [1, 2, 3, 4, 5];
  const relatedArtists = musicSlice.artistSimilars;
  const principalRelateds =
    relatedArtists instanceof Array &&
    relatedArtists?.filter((artist, index) => index < 6);

  useEffect(() => {
    dispatch(getRelatedArtists(idArtist as unknown as number));
  }, [idArtist, dispatch]);

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
              <RelatedArtistsContainer>
                <Title>Fans like it too</Title>
                <Link to={`/related/${idArtist as string}`} className="anchor">
                  See more
                </Link>
              </RelatedArtistsContainer>
              <RelatedArtistsContainer>
                {principalRelateds instanceof Array &&
                  principalRelateds.map((artist: IArtistSimilars, index) => (
                    <GenreCard
                      artist={artist.name}
                      id={artist.id}
                      img={artist.picture_xl}
                      key={index}
                      link={artist.link}
                    />
                  ))}
              </RelatedArtistsContainer>
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
