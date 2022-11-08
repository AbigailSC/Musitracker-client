import styled, { keyframes } from 'styled-components';

interface Props {
  color: string;
  bgColor: string;
}

interface IFigure {
  bgImage: string;
}

interface IHeader {
  color?: string;
  cursor?: string;
}

interface ISkeleton {
  width?: string;
  heigth?: string;
}

const loading = keyframes`
  from {
    left: -200px
  }
  to{
    left: 100%;
  }
`;

export const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(75, 85, 99, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8.7px);
  -webkit-backdrop-filter: blur(8.7px);
  padding: 8px 2em;
  width: calc(100% - 4em);
  &:hover {
    background: rgba(75, 85, 99, 0.4);
    transition: 0.2s ease-in;
  }
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 100%;
  justify-content: start;
  :nth-child(2) {
    justify-content: center;
  }
  :nth-child(3) {
    justify-content: end;
  }
`;

export const Figure = styled.div<IFigure>`
  width: 4em;
  height: 4em;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HeaderText = styled.div<IHeader>`
  color: ${(props) => (props.color !== '#d1d5db' ? props.color : '#d1d5db')};
  cursor: ${(props) => (props.cursor !== 'default' ? props.cursor : 'default')};
  &.hover:hover {
    text-decoration: underline;
    transition: 0.2s ease-in;
  }
`;

export const SkeletonFigure = styled.div<ISkeleton>`
  width: ${(props) => (props.color !== '1em' ? props.width : '1em')};
  height: ${(props) => (props.color !== '1em' ? props.heigth : '1em')};
  background-color: #4b5563;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      #4b5563 0%,
      #7a879a 50%,
      #4b5563 100%
    );
    animation: ${loading} 1000ms ease infinite;
  }
`;
