import styled from 'styled-components';

interface NavbarProps {
  activeColor: boolean;
}

export const NavbarContainer = styled.nav<NavbarProps>`
  width: calc(100% - 100px);
  display: flex;
  align-items: center;
  padding: 2em 4em;
  height: min-content;
  justify-content: space-between;
  background-color: transparent;
  position: fixed;
  z-index: 20;
  &.activeColor {
    background: ${(props) => !!props.activeColor && 'rgba(24, 35, 64, 0.8)'};
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
  }
`;
