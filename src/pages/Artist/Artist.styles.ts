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
