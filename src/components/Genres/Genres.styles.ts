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

export const Container = styled.div<IContainer>`
  display: flex;
  min-width: 220px;
  height: 200px;
  border-radius: 1em;
  flex-direction: column;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
`;
