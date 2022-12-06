import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import CardSkeleton from '@components/CardSkeleton/CardSkeleton';
import Card from '@components/Card';
import { musicBySearch } from '../../redux/slices/music/index';
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux/index';
import {
  Section,
  SectionContent,
  SectionContentLeft,
  HeroContainer,
  HeroContainerSkeleton,
  HeroContainerHeader,
  Container,
  Stack,
  CardContainer,
  ErrorContainer
} from './Results.styles';
import { ITitle } from './types';

const Results: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { name } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);
  const musicData = musicSlice.musicFiltered;
  const skeletonFill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const heroImage: string = musicData[0]?.artist.picture;
  const heroName: string = musicData[0]?.artist.name;
  // Math.floor(Math.random() * musicData.length)
  // * En caso de reloguear la pagina, se pierde el estado de la busqueda
  // * por lo que se debe volver a buscar por el parametro de la url

  const verifyArray = (array: []): boolean => {
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    dispatch(musicBySearch(name as string));
  }, [dispatch, name]);

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
          ) : verifyArray(musicData) ? (
            <ErrorContainer>
              <h3>
                No results found with{' '}
                <span>
                  {"'"}
                  {name}
                  {"'"}
                </span>
              </h3>
              <p>
                Make sure you write the words correctly and use fewer or more
                keywords.
              </p>
            </ErrorContainer>
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
                    key={card.id}
                    obj={card}
                    title={card.title}
                    artist={card.artist.name}
                    album={card.album.title}
                    duration={card.duration}
                    img={card.album.cover}
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
