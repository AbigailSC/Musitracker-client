import styled from 'styled-components';

interface ISidebar {
  isOpen: boolean;
}

export const Logo = styled.img`
  width: 3em;
  height: 3em;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 230px;
  height: calc(100% - 100px);
  background: rgba(24, 35, 64, 0.8);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  display: ${(props: ISidebar) => (props.isOpen ? 'block' : 'none')};
  z-index: 30;
`;

export const SidebarContainerHidden = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: calc(100% - 100px);
  background: rgba(24, 35, 64, 0.8);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  display: ${(props: ISidebar) => (props.isOpen ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
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
  & > .anchor,
  .anchor:link,
  .anchor:visited,
  .anchor:hover {
    text-decoration: none;
    color: inherit;
    cursor: auto;
    outline: 0;
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
    & > .subIcon {
      transition: 0.2s ease;
      color: #c35df7;
    }
  }
  &:nth-child(1) {
    justify-content: flex-start;
  }
  & ~ .secondary {
    justify-content: flex-start;
  }
  & > .subIcon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 1em;
  }
  & > .anchor,
  .anchor:link,
  .anchor:visited,
  .anchor:hover {
    text-decoration: none;
    color: inherit;
    cursor: auto;
    outline: 0;
  }
`;

export const ButtonHidden = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background: transparent;
  color: #d4d4ea;
  & > .icon {
    width: 1.5em;
    height: 1.5em;
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
  & > .anchor,
  .anchor:link,
  .anchor:visited,
  .anchor:hover {
    text-decoration: none;
    color: inherit;
    cursor: auto;
    outline: 0;
  }
  /* margin-left: 2.5em; */
  & > ${Button} {
    &:nth-child(3) {
      justify-content: flex-start;
    }
  }
`;
