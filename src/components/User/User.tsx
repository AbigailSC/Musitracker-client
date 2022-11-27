import React from 'react';
import { UserContainer, Avatar, UserDropdown } from './User.styles';

const User: React.FC = () => {
  return (
    <UserContainer>
      <Avatar
        src="https://res.cloudinary.com/dbhb8sohh/image/upload/v1661300709/fv195vkpbkbra3xd9tei.gif"
        alt="nombre"
      />
      <UserDropdown>
        <span>Profile</span>
        <span>Log out</span>
      </UserDropdown>
    </UserContainer>
  );
};

export default User;
