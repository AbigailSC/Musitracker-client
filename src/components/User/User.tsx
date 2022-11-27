import React, { useState } from 'react';
import {
  UserContainer,
  Avatar,
  UserDropdown,
  UserDropdownItem
} from './User.styles';

const User: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <UserContainer>
      <Avatar
        src="https://res.cloudinary.com/dbhb8sohh/image/upload/v1661300709/fv195vkpbkbra3xd9tei.gif"
        alt="nombre"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <UserDropdown>
          <UserDropdownItem>Profile</UserDropdownItem>
          <UserDropdownItem>Sing out</UserDropdownItem>
        </UserDropdown>
      )}
    </UserContainer>
  );
};

export default User;
