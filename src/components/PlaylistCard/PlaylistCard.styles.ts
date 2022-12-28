import styled from 'styled-components';

export const PlaylisCardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  cursor: pointer;
`;

export const PlaylistCardImg = styled.img`
  width: 100%;
  border-radius: 1em;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  color: #d4d4ea;
  transition: 0.2s ease;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: 0.2s ease;
  }
`;
