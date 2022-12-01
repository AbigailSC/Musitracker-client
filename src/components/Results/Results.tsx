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
  HeroContainerHeader,
  Container,
  Stack,
  CardContainer
} from './Results.styles';
import { musicBySearch } from '../../redux/slices/music/index';
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux/index';
import Card from '@components/Card';
import { ITitle } from './types';
import CardSkeleton from '@components/CardSkeleton/CardSkeleton';

const Results: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { name } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);
  const musicData = musicSlice.musicFiltered;
  const skeletonFill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const heroImage: string = musicData[0]?.artist.picture;
  const heroName = musicData[0]?.artist.name;
  // Math.floor(Math.random() * musicData.length)
  // * En caso de reloguear la pagina, se pierde el estado de la busqueda
  // * por lo que se debe volver a buscar por el parametro de la url

  useEffect(() => {
    dispatch(musicBySearch(name as string));
  }, []);

  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? (
            <Stack>
              <Container>
                <HeroContainerSkeleton />
              </Container>
              <CardContainer>
                {skeletonFill.map((index) => (
                  <CardSkeleton key={index} index={index + 1} />
                ))}
              </CardContainer>
            </Stack>
          ) : (
            <Stack>
              <Container>
                <HeroContainer>
                  <HeroContainerHeader>
                    <h3>Artist</h3>
                    <h2>{heroName}</h2>
                  </HeroContainerHeader>
                  <img src={heroImage} alt="hero" />
                </HeroContainer>
              </Container>
              <CardContainer>
                {musicData.map((card: ITitle, index: number) => (
                  <Card
                    key={index}
                    title={card.title}
                    artist={card.artist.name}
                    album={card.album.title}
                    duration={card.duration}
                    img={card.album.cover}
                    id={card.id}
                    index={index + 1}
                  />
                ))}
              </CardContainer>
            </Stack>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Results;
