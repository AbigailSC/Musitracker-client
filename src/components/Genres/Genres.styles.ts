import styled from 'styled-components';

// const loading = keyframes`
//   from {
//     left: -200px
//   }
//   to{
//     left: 100%;
//   }
// `;

interface IContainer {
  backgroundImage: string;
}

export const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
  word-break: normal;
  letter-spacing: 2px;
  color: #fff;
`;

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1em;
  width: 200px;
  height: 200px;
  border-radius: 1em;
  flex-direction: column;
  transition: 0.2s ease-in;
  background-image: ${(props) =>
    `linear-gradient(rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 0.8)),url(${props.backgroundImage})`};
  background-size: cover;
  cursor: pointer;
`;
