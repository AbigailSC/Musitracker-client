import styled from 'styled-components';

interface IText {
  cursor?: string;
}

export const Icon = styled.div`
  cursor: pointer;
  height: 1em;
  width: 1em;
`;

export const Text = styled.h4<IText>`
  color: #d4d4ea;
  cursor: ${(props) => (props.cursor !== 'default' ? props.cursor : 'default')};
`;

export const Image = styled.img`
  width: 4em;
  height: 4em;
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 50%;
  justify-content: start;
  &:nth-child(2) {
    justify-content: flex-start;
    width: 40%;
    & > ${Text} {
      width: min-content;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &:nth-child(3) {
    width: 10%;
    justify-content: end;
  }
  & > p {
    width: 30px;
    display: flex;
    justify-content: flex-end;
  }
  & > .anchor,
  .anchor:link,
  .anchor:visited,
  .anchor:hover {
    text-decoration: none;
    color: #d4d4ea;
    cursor: auto;
    outline: 0;
  }
  & > ${Icon} {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-radius: 1em;
  padding: 8px 2em;
  width: 100%;
  transition: 0.2s ease;
  &:hover {
    background: rgba(75, 85, 99, 0.25);
    transition: 0.1s ease;
    & > ${HStack} {
      & > ${Icon} {
        display: block;
        transition: 0.1s ease;
      }
    }
  }
`;
