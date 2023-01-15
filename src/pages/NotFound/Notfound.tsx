import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text } from './NotFound.styles';

const Notfound: React.FC = () => {
  return (
    <Container>
      <object
        type="image/svg+xml"
        data="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
        className="notFound"
      >
        404 SVG animation example
      </object>
      <Text className="header">
        <span>Oops!</span> Something went wrong.
      </Text>
      <Text className="body">
        The link you followed may be broken, or the page may have been removed.
      </Text>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <button>Go home</button>
      </Link>
    </Container>
  );
};

export default Notfound;
