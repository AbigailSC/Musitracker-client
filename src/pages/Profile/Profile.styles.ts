import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  gap: 2em;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 20%;
  border: 1px dotted rgba(255, 255, 255, 0.1);
  align-items: center;
  padding: 2em 1em;
  border-radius: 1em;
`;

export const ProfileImage = styled.img`
  width: 75%;
  // height: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.3);
`;

export const ProfileName = styled.h2`
  font-size: 2em;
  color: #fff;
  text-transform: capitalize;
`;

export const ProfileEmail = styled.h3`
  font-size: 1em;
  color: #d4d4ea;
`;

export const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 80%;
  border: 1px dotted rgba(255, 255, 255, 0.1);
  align-items: flex-start;
  padding: 2em;
  border-radius: 1em;
  & > p {
    color: #d4d4ea;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

export const StackTitle = styled.h3`
  font-size: 2em;
  font-weight: 700;
  color: #fff;
`;
