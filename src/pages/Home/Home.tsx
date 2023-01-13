/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft,
  GenresContainer,
  ArtistContainer,
  Title,
  TrendingContainer,
  ArtistHeader,
  ArtistBg
} from './Home.styles';
import {
  getGenres,
  getTrendingMusic,
  getTrendingArtists,
  getTopPlaylists,
  getTrendingPodcasts
} from '@redux/slices/music/index';
import { useCustomDispatch, useCustomSelector } from '@hooks/redux/index';
import Genres from '@components/Genres';
import { IGenres } from '@components/Genres/types';
import { ITopPlaylist, ITrendingArtists, ITrendingPodcasts } from '@redux/slices/music/types';
import GenreCard from '@components/GenreCard';
import { ITitle } from '@pages/Results/types';
import TopCard from '@components/TopCard';
import PlaylistCard from '@components/PlaylistCard';
import Spinner from '@components/Spinner/Spinner';
import PodcastCard from '@components/PodcastCard';

const Home: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { musicSlice } = useCustomSelector((state) => state);
  const trendingArtists = musicSlice.trendingArtists;
  const trendingMusic = musicSlice.trendingMusic;
  const trendingPlaylists = musicSlice.topPlaylist;
  const podcasts = musicSlice.trendingPodcasts
  const genres = musicSlice.genres;
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getTrendingMusic())
    dispatch(getTrendingArtists())
    dispatch(getTopPlaylists())
    dispatch(getTrendingPodcasts())
  }, []);

  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <Spinner />
          ) : (
            <>
              <ArtistHeader>
                <ArtistBg />
                <h3>Find the path to millions of songs. & jump start your musical journey ♫</h3>
              </ArtistHeader>
              <Title id="trendingMusic">Trending Music</Title>
              <TrendingContainer>
                {trendingMusic instanceof Array && trendingMusic.map((music: ITitle, index) => (
                  <TopCard key={music.id}
                    obj={music}
                    title={music.title}
                    duration={music.duration}
                    img={music.album.cover}
                    rank={music.rank}
                    index={index + 1} />
                ))}
              </TrendingContainer>
              <Title>Top Artists</Title>
              <ArtistContainer>
                {trendingArtists instanceof Array && trendingArtists.map((artist: ITrendingArtists, index) => (
                  <GenreCard artist={artist.name} id={artist.id} img={artist.picture_xl} key={index} link={artist.link} />
                ))
                }
              </ArtistContainer>
              <Title>Top Playlists</Title>
              <GenresContainer>
                {trendingPlaylists instanceof Array && trendingPlaylists.map((playlist: ITopPlaylist) => (
                  <PlaylistCard
                    key={playlist.id}
                    id={playlist.id}
                    title={playlist.title}
                    img={playlist.picture_xl}
                  />
                ))}
              </GenresContainer>
              <Title>Trending Podcasts</Title>
              <GenresContainer>
                {podcasts instanceof Array && podcasts.map((podcast: ITrendingPodcasts) => (
                  <PodcastCard key={podcast.id} id={podcast.id} title={podcast.title} link={podcast.link} picture={podcast.picture} />
                ))}
              </GenresContainer>
              <Title id="genres">Genres</Title>
              <GenresContainer className='last'>
                {genres instanceof Array
                  && genres.map((genre: IGenres) => (
                    <Genres
                      key={genre.id}
                      id={genre.id}
                      picture={genre.picture}
                      name={genre.name}
                    />
                  ))
                }
              </GenresContainer>
            </>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Home;
