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
import { IMusicSearched } from '@redux/slices/music/types';

const Results: React.FC = () => {
  const { name } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);
  const musicData = musicSlice.musicFiltered;
  const skeletonFill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const firstObject: IMusicSearched = musicData[0 as keyof typeof musicData];

  const heroImage = firstObject?.artist?.picture;
  const heroName = firstObject?.artist?.name;

  // Math.floor(Math.random() * musicData.length)
  // * En caso de reloguear la pagina, se pierde el estado de la busqueda
  // * por lo que se debe volver a buscar por el parametro de la url
  //  const handleNext = (): void => {
  //    if (count < dataAllMusic.length - 1) {
  //      setCount(count + 1);
  //      dispatch(getCurrentArtist(dataAllMusic[count + 1].artist.id));
  //      dispatch(getArtistAlbums(dataAllMusic[count + 1].artist.id));
  //    }
  //  };
  //
  //  const handlePrev = (): void => {
  //    if (count > 0) {
  //      setCount(count - 1);
  //      dispatch(getCurrentArtist(dataAllMusic[count - 1].artist.id));
  //      dispatch(getArtistAlbums(dataAllMusic[count - 1].artist.id));
  //    }
  //  };
  //
  // if (
  //   musicData instanceof Array &&
  //   musicData !== undefined &&
  //   musicData.length > 0
  // ) {
  //   console.log(musicData[0]?.artist.name);
  // }

  // console.log(firstObject);

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
          ) : musicData instanceof Array && musicData.length === 0 ? (
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
