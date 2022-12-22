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

export const AlbumCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  width: 300px;
  height: 400px;
  background: rgba(75, 85, 99, 0.25);
  border-radius: 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  padding: 1em;
`;

export const AlbumCardImage = styled.img`
  width: 100%;
  height: 300px;
`;

export const AlbumCardTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  color: #d4d4ea;
  transition: 0.2s ease-out;
  &:hover {
    color: #fff;
    transition: 0.2s ease-in;
  }
`;

export const DotSpan = styled.div`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #d4d4ea;
`;

export const AlbumCardSubtitle = styled.h4`
  font-size: 1em;
  color: #d4d4ea;
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: min-content;
`;
