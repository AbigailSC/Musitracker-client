import React, { useState } from 'react';
import User from '@components/User';
import Searchbar from '@components/Searchbar';
import { NavbarContainer } from './Navbar.styles';

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = (): void => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  // className={navbar ? 'activeColor' : null}
  return (
    <NavbarContainer activeColor={navbar} className="activeColor">
      <Searchbar />
      <User />
    </NavbarContainer>
  );
};

export default Navbar;
