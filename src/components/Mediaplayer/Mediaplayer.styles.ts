import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
`;

interface IMediaPlayerContainer {
  background: string;
}

export const MediaPlayerContainer = styled.div`
  width: 100%;
  bottom: 0;
  right: 0;
  position: fixed;
  background: rgba(24, 35, 64, 0.4);

  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  z-index: 40;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 6em;
`;

export const HStack = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const MediaPlayerImg = styled.img<IMediaPlayerContainer>`
  width: 70px;
  height: 70px;
  box-shadow: ${(props) => `${props.background} 0px 20px 40px -15px`};
`;

export const VolumeLine = styled.div`
  width: 80px;
  height: 4px;
  background-color: aliceblue;
`;

export const PlayButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d4d4ea;
  transition: 0.1s ease;
  &:hover {
    transform: scale(1.05);
    transition: 0.1s ease;
  }
  &:active {
    animation: ${scale} 0.2s ease-out;
  }
`;

export const ProgressBar = styled.input<IMediaPlayerContainer>`
  position: relative;
  background-color: ${(props) => props.background};
  border-radius: 8px;
  height: 7px;
  width: 100%;
  outline: none;
  z-index: 100;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: pointer;
    background-color: #fff;
    display: none;
  }
  &:hover {
    &::-webkit-slider-thumb {
      display: block;
    }
  }
`;
