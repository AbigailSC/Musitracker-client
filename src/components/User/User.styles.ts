import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 50px;
  cursor: pointer;
`;

export const UserDropdown = styled.div`
  background-color: red;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: min-content;
  top: 4em;
  right: 0;
`;
