/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Section,
  SectionContent,
  SectionContentLeft,
  HeroContainer,
  HeroContainerSkeleton,
  HeroContainerHeader
} from './Results.styles';
import { musicBySearch } from '../../redux/slices/music/index';
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux/index';

const Results: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { name } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);
  const musicData = musicSlice.musicFiltered;

  const heroImage: string = musicData[0]?.artist.picture;
  const heroName = musicData[0]?.artist.name;
  // Math.floor(Math.random() * musicData.length)
  // * En caso de reloguear la pagina, se pierde el estado de la busqueda
  // * por lo que se debe volver a buscar por el parametro de la url

  useEffect(() => {
    dispatch(musicBySearch(name as string));
  }, []);

  console.log(musicData);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <HeroContainerSkeleton />
          ) : (
            <HeroContainer>
              <HeroContainerHeader>
                <h3>Artist</h3>
                <h2>{heroName}</h2>
              </HeroContainerHeader>
              <img src={heroImage} alt="hero" />
            </HeroContainer>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Results;
