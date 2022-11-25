import styled from 'styled-components';

interface IButtons {
  bgColor: string;
  hoverColor: string;
}

export const LandingContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to top,
      rgba(17, 24, 39, 1),
      rgba(17, 24, 39, 0.3),
      rgba(17, 24, 39, 1)
    ),
    url('https://res.cloudinary.com/dbhb8sohh/image/upload/v1667946577/bmth_ibxk9e.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 8em;
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 4em;
`;

export const Header = styled.h2`
  font-size: 4em;
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: 2em;
`;

export const HStack = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  &:nth-child(1) {
    gap: 8px;
  }
`;

export const Button = styled.button<IButtons>`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  padding: 8px 2em;
  border-radius: 8px;
  transition: 0.2s ease;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    transition: 0.2s ease;
  }
  &:active {
    transform: scale(0.98);
    transition: 0.2s ease;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  position: fixed;
  justify-content: space-between;
  padding: 0 8em;
  align-items: center;
`;

export const Logo = styled.img`
  width: 2em;
  height: 2em;
`;

export const List = styled.ul`
  display: flex;
  gap: 2em;
`;

export const AList = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const HyperText = styled.h1`
  font-size: 1em;
  font-weight: 400;
`;

export const Span = styled.span`
  color: #7362c3;
  font-weight: 400;
`;
