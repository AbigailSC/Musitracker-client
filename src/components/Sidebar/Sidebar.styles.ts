import styled from 'styled-components';

export const Logo = styled.img`
  width: 3em;
  height: 3em;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  background: rgba(99, 99, 99, 0.1);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
`;

export const HStack = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  & > .icon {
    width: 1.5em;
    height: 1.5em;
  }
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
  transition: 0.2s ease;
  & > .effectHover {
    background-color: #fff;
    width: 5px;
    height: 100%;
    position: absolute;
    display: none;
    left: 0px;
    bottom: 0px;
    overflow: hidden;
    border-radius: 0px 5px 5px 0px;
    background-color: #c35df7;
  }
  &:hover {
    color: #fff;
    transition: 0.2s ease;
  }
  &:focus {
    & > .effectHover {
      display: block;
    }
    & > ${HStack} > .icon {
      transition: 0.2s ease;
      color: #c35df7;
    }
  }
  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    justify-content: flex-start;
  }
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 2.5em; */
`;

export const Span = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: aliceblue;
  margin-right: 2em;
`;
