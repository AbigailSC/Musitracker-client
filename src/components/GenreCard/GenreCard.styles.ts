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
  width: string;
  heigth: string;
  borderRadius: string;
}

export const GenreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 2em;
  background: rgba(75, 85, 99, 0.25);
  border-radius: 1.5em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  width: 260px;
  justify-content: center;
  text-align: center;
  gap: 1em;
  height: 300px;
  & > .anchor,
  .anchor:link,
  .anchor:visited,
  .anchor:hover {
    text-decoration: none;
    color: #d4d4ea;
    cursor: auto;
    outline: 0;
  }
`;

export const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  color: #d4d4ea;
  cursor: pointer;
  transition: 0.2s ease-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: #fff;
    transition: 0.2s ease-out;
  }
`;

export const ImageArtist = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const GenreCardContainerFigure = styled.div<ISkeleton>`
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: #4b5563;
  border-radius: ${(props) => props.borderRadius};
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
