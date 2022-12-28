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
  TrendingContainer
} from './Home.styles';
import { getGenres, getTrendingMusic, getTrendingArtists, getTopPlaylists, getTrendingPodcasts } from '@redux/slices/music/index';
import { useCustomDispatch, useCustomSelector } from '@hooks/redux/index';
import Genres from '@components/Genres';
import { IGenres } from '@components/Genres/types';
import { ITrendingArtists } from '@redux/slices/music/types';
import GenreCard from '@components/GenreCard';
import { ITitle } from '@pages/Results/types';
import TopCard from '@components/TopCard';

const Home: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { musicSlice } = useCustomSelector((state) => state);
  const trendingArtists = musicSlice.trendingArtists;
  const trendingMusic = musicSlice.trendingMusic
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
            <p>Loading</p>
          ) : (
            <>
              <Title>Trending Music</Title>
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
              <GenresContainer>
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
