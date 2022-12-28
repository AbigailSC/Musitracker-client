import styled from 'styled-components';

export const PlaylisCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const PlaylistCardImg = styled.img`
  width: 300px;
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
