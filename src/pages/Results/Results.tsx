import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import CardSkeleton from '@components/CardSkeleton/CardSkeleton';
import Card from '@components/Card';
import { useCustomSelector } from '@hooks/redux/index';
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
  ErrorContainer,
  HStack,
  Text
} from './Results.styles';
import { ITitle } from './types';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Results: React.FC = () => {
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
  // useEffect(() => {
  //   return () => {
  //     dispatch(clearMusicBySearch());
  //   };
  // }, [dispatch]);

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
              <HStack>
                <Text width="50%">
                  <span>#</span>
                  <div />
                  <h3>Title</h3>
                </Text>
                <Text width="40%">
                  <h3>Album</h3>
                </Text>
                <Text width="10%">
                  <AiOutlineClockCircle />
                </Text>
              </HStack>
              <CardContainer>
                {musicData instanceof Array &&
                  musicData.map((card: ITitle, index: number) => (
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
