import styled from 'styled-components';

interface IImage {
  backgroundImage: string;
}

export const PodcastCardTitle = styled.h3`
  font-size: 1.5em;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #d4d4ea;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1em;
`;

export const PodcastCardContainer = styled.div<IImage>`
  width: 300px;
  height: 300px;
  border-radius: 1em;
  background-image: linear-gradient(
      rgba(24, 35, 64, 0.1),
      rgba(24, 35, 64, 0.5)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease;
  & .icon {
    display: none;
    width: 2em;
    height: 2em;
    position: absolute;
    bottom: calc(50% - 1em);
    left: calc(50% - 1em);
    color: #fff;
  }
  & > .anchor,
  .anchor:link,
  .anchor:visited,
  .anchor:hover {
    text-decoration: none;
    color: #d4d4ea;
    cursor: pointer;
    outline: 0;
    &:hover {
      color: #fff;
      transition: 0.2s ease-out;
    }
    > .icon {
      width: 1.5em;
      height: 1.5em;
    }
  }
  &:hover {
    background-image: linear-gradient(
        rgba(24, 35, 64, 0.1),
        rgba(24, 35, 64, 0.8)
      ),
      url(${(props) => props.backgroundImage});
    transition: 0.2s ease;
    & ${PodcastCardTitle} {
      color: #fff;
      transition: 0.2s ease;
    }
    & .icon {
      display: block;
    }
  }
`;

export const PodcastCardImage = styled.img`
  width: 100%;
  border-radius: 1em;
`;
