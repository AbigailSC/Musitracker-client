import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import React from 'react';
import {
  Section,
  SectionContent,
  SectionContentLeft,
  Header,
  ContainerCards
} from './ResultsByGenre.styles';
import { useParams } from 'react-router-dom';
import { useCustomSelector } from '../../hooks/redux/index';
import { IGenres } from '@components/Genres/types';
import GenreCard from '@components/GenreCard';
import {
  GenreCardContainerFigure,
  GenreCardContainer
} from '@components/GenreCard/GenreCard.styles';

const ResultsByGenre: React.FC = () => {
  const { genre } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);
  const currentGenre = musicSlice.currentGenre;
  const skeletonFill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          <Header>{genre}</Header>
          {musicSlice.isLoading ? (
            <ContainerCards>
              {skeletonFill.map((item) => (
                <GenreCardContainer key={item}>
                  <GenreCardContainerFigure
                    width="200px"
                    heigth="200px"
                    borderRadius="50%"
                  />
                  <GenreCardContainerFigure
                    width="100%"
                    heigth="1.5em"
                    borderRadius="1em"
                  />
                </GenreCardContainer>
              ))}
            </ContainerCards>
          ) : (
            <ContainerCards>
              {currentGenre instanceof Array &&
                currentGenre.map((item: IGenres) => (
                  <GenreCard
                    key={item.id}
                    artist={item.name}
                    img={item.picture}
                    link={item.link}
                    id={item.id}
                  />
                ))}
            </ContainerCards>
          )}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default ResultsByGenre;
