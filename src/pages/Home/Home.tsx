/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar/Sidebar';
import {
  Section,
  SectionContent,
  SectionContentLeft,
  GenresContainer
} from './Home.styles';
import { getGenres } from '@redux/slices/music/index';
import { useCustomDispatch, useCustomSelector } from '@hooks/redux/index';
import Genres from '@components/Genres';
import { IGenres } from '@components/Genres/types';

const Home: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { musicSlice } = useCustomSelector((state) => state);
  const genres = musicSlice.genres;
  useEffect(() => {
    dispatch(getGenres());
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
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Home;
