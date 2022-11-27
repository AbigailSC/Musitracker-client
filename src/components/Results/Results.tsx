/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, SectionContent, SectionContentLeft } from './Results.styles';
import { musicBySearch } from '../../redux/slices/music/index';
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux/index';
import Spinner from '@components/Spinner/Spinner';

const Results: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { name } = useParams();
  const { musicSlice } = useCustomSelector((state) => state);

  // * En caso de reloguear la pagina, se pierde el estado de la busqueda
  // * por lo que se debe volver a buscar por el parametro de la url

  useEffect(() => {
    dispatch(musicBySearch(name as string));
  }, []);

  console.log(musicSlice);
  return (
    <Section>
      <Sidebar />
      <SectionContent>
        <Navbar />
        <SectionContentLeft>
          {musicSlice.isLoading ? <Spinner /> : <p>Busquedas!</p>}
        </SectionContentLeft>
      </SectionContent>
    </Section>
  );
};

export default Results;
