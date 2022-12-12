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
  background: rgba(24, 35, 64, 0.7);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: min-content;
  top: 58px;
  right: 0;
  padding: 4px 0;
  gap: 2px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 60;
`;

export const UserDropdownItem = styled.div`
  width: 200px;
  color: #d4d4ea;
  font-size: 1em;
  cursor: pointer;
  padding: 8px 12px;
  transition: 0.2s ease;
  z-index: 60;
  &:hover {
    color: #fff;
    background-color: #7362c3;
    transition: 0.2s ease;
  }
`;
