/* eslint-disable react-hooks/exhaustive-deps */
import Card from '@components/Card';
import React from 'react';
import { useCustomSelector } from '../../hooks/redux/index';

const Home: React.FC = () => {
  // const dispatch = useCustomDispatch();

  const { auth } = useCustomSelector((state) => state);
  console.log('el auth es ', auth.accessToken);
  return (
    <>
      <Card />
    </>
  );
};

export default Home;
