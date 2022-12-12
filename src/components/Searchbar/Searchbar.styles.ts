import styled from 'styled-components';

export const SearchbarContainer = styled.form`
  width: 40%;
  display: flex;
  align-items: center;
  height: min-content;
  position: relative;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  background: rgba(99, 99, 99, 0.1);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  padding: 1em;
  border-radius: 12px;
  color: #fff;
`;
export const Icon = styled.button`
  position: absolute;
  right: 10px;
  top: 35%;
  background: transparent;
  color: #d4d4ea;
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: 0.2s ease-in;
  }
`;
