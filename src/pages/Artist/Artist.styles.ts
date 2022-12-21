import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    left: -200px
  }
  to{
    left: 100%;
  }
`;

interface ISkeleton {
  width?: string;
  heigth?: string;
}

interface IHeader {
  backgroundImg: string;
}

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

export const ArtistContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const ArtistHeader = styled.div<IHeader>`
  width: 100%;
  height: 420px;
  border-radius: 1em;
  background-image: ${(props) =>
    `linear-gradient(rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 0.8)),url(${props.backgroundImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 25%;
`;

export const Title = styled.h2`
  font-size: 3em;
  font-weight: 700;
`;

export const HStack = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  > .icon {
    width: 1.5em;
    height: 1.5em;
  }
`;
