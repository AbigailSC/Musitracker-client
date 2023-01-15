import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #262a37;
  position: relative;
  font-family: 'Nunito', sans-serif;
  & > .notFound {
    position: absolute;
    right: 50;
    left: 50;
    top: 50;
    bottom: 50;
    width: 50%;
  }
  & > a {
    position: fixed;
    top: 85%;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: #775cff;
    padding: 8px 2em;
    border-radius: 8px;
    transition: 0.2s ease;
    &:hover {
      transform: scale(1.05);
      transition: 0.2s ease;
    }
    &:active {
      transform: scale(0.98);
      transition: 0.2s ease;
    }
    & > button {
      outline: none;
      border: none;
      cursor: pointer;
      text-decoration: none;
      background-color: transparent;
      color: #fff;
      font-family: 'Nunito', sans-serif;
    }
  }
`;

export const Text = styled.p`
  position: fixed;
  &.header {
    top: 10%;
    left: 50;
    right: 50;
    font-size: 3rem;
    color: #fff;
    & > span {
      color: #775cff;
    }
  }
  &.body {
    top: 75%;
    font-size: 1.5em;
  }
`;
