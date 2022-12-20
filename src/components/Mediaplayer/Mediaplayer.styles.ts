import styled, { keyframes } from 'styled-components';

const height = '30px';
const thumbHeight = 28;
const trackHeight = '10px';
const upperColor = '#edf5f9';
const lowerColor = '#c35df7';
const thumbColor = '#ddd';
const thumbHoverColor = '#ccc';
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color: string, size: string): string => {
  let i = 18;
  let shadow = `${i}px 0 0 ${size} ${color}`;
  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }
  return shadow;
};

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
`;

const pulse = (background: string): any => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${background};
  }
  70% {
    box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

interface IMediaPlayerContainer {
  background: string;
  active: boolean;
}

export const MediaPlayerContainer = styled.div`
  width: 100%;
  bottom: 0;
  right: 0;
  position: fixed;
  background: rgba(24, 35, 64, 0.8);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  z-index: 40;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 6em;
`;

export const MediaPlayerContent = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  &:nth-child(2) {
    width: 20%;
    justify-content: flex-start;
  }
  &:nth-child(3) {
    width: 60%;
    justify-content: center;
  }
  &:nth-child(4) {
    width: 20%;
    justify-content: flex-end;
  }
`;

export const HStack = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

export const PlayerContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  :nth-child(1) {
    width: 100%;
  }
  :nth-child(2) {
    align-items: flex-start;
  }
  & > h3 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MediaPlayerImg = styled.img<IMediaPlayerContainer>`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  /* box-shadow: ${(props) => `${props.background} 0px 20px 40px -15px`}; */
  animation: ${(props) => (props.active ? null : pulse(props.background))} 1.5s
    infinite;
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
  overflow: hidden;
  display: block;
  appearance: none;
  // background-color: ${(props) => props.background};
  background-color: transparent;
  height: ${height};
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  margin: 0;
  outline: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }
  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, '-10px')};
    transition: background-color 150ms;
  }
  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }
  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }
  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }
  &::-ms-fill-lower {
    background: ${lowerBackground};
  }
  &::-ms-fill-upper {
    background: ${upperBackground};
  }
  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }
  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;
