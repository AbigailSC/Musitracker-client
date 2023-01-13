import React from 'react';
import { SpinnerLoader, Container } from './Spinner.styles';

const Spinner: React.FC = () => {
  return (
    <Container>
      <SpinnerLoader />
    </Container>
  );
};

export default Spinner;
