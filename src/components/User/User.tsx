import React, { useState } from 'react';
import {
  UserContainer,
  Avatar,
  UserDropdown,
  UserDropdownItem
} from './User.styles';
import { getlogOut } from '../../redux/slices/auth/index';
import { useNavigate } from 'react-router-dom';
import { useCustomDispatch } from '../../hooks/redux';

const User: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSingOut = (): void => {
    dispatch(getlogOut());
    navigate('/');
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
          <UserDropdownItem onClick={() => handleSingOut()}>
            Sing out
          </UserDropdownItem>
        </UserDropdown>
      )}
    </UserContainer>
  );
};

export default User;
