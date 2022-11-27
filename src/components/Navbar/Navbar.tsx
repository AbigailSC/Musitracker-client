import React from 'react';
import User from '@components/User';
import Searchbar from '@components/Searchbar';
import { NavbarContainer } from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Searchbar />
      <User />
    </NavbarContainer>
  );
};

export default Navbar;
