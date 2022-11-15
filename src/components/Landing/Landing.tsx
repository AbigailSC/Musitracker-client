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
  List,
  AList,
  HyperText,
  Span,
  Stack
} from './Landing.styles';
import { BsFillCaretDownFill } from 'react-icons/bs';
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
          <List>
            <li>
              <AList href="#landing">Home</AList>
            </li>
            <li>
              <AList href="#about">About</AList>
            </li>
            <li>
              <AList href="#contact">Contact</AList>
            </li>
          </List>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            quam optio suscipit neque! Exercitationem unde libero iure, vero
            maxime maiores aspernatur deserunt quidem numquam reprehenderit sunt
            totam porro corrupti quo? trum reiciendis minus, architecto eaque
            placeat aliquam accusamus?
          </Text>
        </Container>
        <Stack>
          <Text>Ver más</Text>
          <BsFillCaretDownFill style={{ width: '3em', height: '3em' }} />
        </Stack>
      </LandingContainer>
    </>
  );
};

export default Landing;
