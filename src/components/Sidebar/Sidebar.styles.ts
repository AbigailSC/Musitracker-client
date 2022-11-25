import styled from 'styled-components';

export const Logo = styled.img`
  width: 3em;
  height: 3em;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  background: rgba(17, 24, 39, 0.3);
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  font-size: 1em;
  line-height: 1;
  padding: 0 2em;
  background: transparent;
  color: #d4d4ea;
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: 0.2s ease;
  }
  &:focus {
    border-right: 3px solid #6a28cb;
  }
`;

export const HStack = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Span = styled.div`
  width: 1em;
  border-radius: 100%;
`;

export const SubBtn = styled.div`
  &.sub-nav {
    overflow: hidden;
    height: 0;
  }
  &.sub-nav.open {
    height: 100%;
  }
`;
