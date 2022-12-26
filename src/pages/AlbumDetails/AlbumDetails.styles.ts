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
  backgroundColor: string;
}

interface IText {
  color: string;
  weight: string;
  size: string;
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

export const AlbumHeader = styled.div<IHeader>`
  width: 100%;
  height: 420px;
  border-radius: 1em;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  padding: 1em 2em;
  gap: 1em;
`;

export const AlbumImg = styled.img`
  width: 300px;
  height: 300px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
`;

export const AlbumHeaderInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 300px;
  justify-content: flex-end;
`;

export const Text = styled.h3<IText>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-transform: capitalize;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
`;

// export const AlbumHeaderContainer = styled.div``;
