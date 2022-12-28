import React, { useState } from 'react';
import {
  UserContainer,
  Avatar,
  UserDropdown,
  UserDropdownItem,
  SkeletonAvatar
} from './User.styles';
import { getlogOut } from '@redux/slices/auth/index';
import { logOut } from '@redux/slices/user/user';
import { Link, useNavigate } from 'react-router-dom';
import { useCustomDispatch, useCustomSelector } from '@hooks/redux';

const User: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();
  const { userSlice } = useCustomSelector((state) => state);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSingOut = (): void => {
    dispatch(getlogOut());
    dispatch(logOut());
    navigate('/');
  };
  return (
    <UserContainer>
      {userSlice.userInfo !== null ? (
        <Avatar
          src={userSlice.userInfo.imageProfile}
          alt="nombre"
          onClick={toggleDropdown}
        />
      ) : (
        <SkeletonAvatar />
      )}
      {isOpen && (
        <UserDropdown>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <UserDropdownItem>Profile</UserDropdownItem>
          </Link>
          <UserDropdownItem onClick={() => handleSingOut()}>
            Sing out
          </UserDropdownItem>
        </UserDropdown>
      )}
    </UserContainer>
  );
};

export default User;
