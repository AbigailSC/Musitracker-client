import React from 'react';
import {
  LandingContainer,
  Container,
  Header,
  Text,
  HStack,
  Button,
  Navbar,
  Logo,
  HyperText,
  Span
} from './Landing.styles';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <>
      <Navbar>
        <HStack>
          <Logo src="./logo.png" alt="musitracker" />
          <HyperText>Musitracker</HyperText>
        </HStack>
        <HStack>
          <Link to="/singin">
            <Button bgColor="#b535f6 " hoverColor="#c35df7">
              Sing in
            </Button>
          </Link>
          <Link to="/singup">
            <Button bgColor="#4b5563" hoverColor="#5d6672">
              Sing up
            </Button>
          </Link>
        </HStack>
      </Navbar>
      <LandingContainer id="landing">
        <Container>
          <Header>
            All you <Span>need</Span> is love, and maybe a little{' '}
            <Span>music</Span>.
          </Header>
          <Text>
            Discover, listen and share an ever-growing music catalog of emerging
            and established artists from around the world.
          </Text>
        </Container>
      </LandingContainer>
    </>
  );
};

export default Landing;
