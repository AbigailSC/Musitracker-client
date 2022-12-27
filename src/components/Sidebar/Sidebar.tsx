/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineCompass, AiOutlineLike, AiOutlineUser } from 'react-icons/ai';
import { BiPodcast, BiTrendingUp, BiBroadcast, BiMusic } from "react-icons/bi"
import { MdOutlineMusicVideo, MdExpandMore, MdExpandLess } from "react-icons/md"
import { Link } from 'react-router-dom';
import { Logo, SidebarContainer, Button, ContainerLogo, HStack, SubItem, SidebarContainerHidden, ButtonHidden } from './Sidebar.styles';


const Sidebar: React.FC = () => {

  const [activeItem, setActiveItem] = useState<boolean>(false);
  const [activeSidebar, setActiveSidebar] = useState<boolean>(false);

  const handleActiveItem = (): void => {
    setActiveItem(!activeItem)
  }

  const handleFalseActiveItem = (): void => {
    setActiveItem(false)
  }

  const handleActiveSidebar = (): void => {
    setActiveSidebar(true)
  }
  const handleDesactiveSidebar = (): void => {
    setActiveSidebar(false)
  }
  const logo = "https://res.cloudinary.com/dbhb8sohh/image/upload/v1671491482/logo_u5qkmd.png"
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div onMouseOver={handleActiveSidebar} onMouseOut={handleDesactiveSidebar}>
      <SidebarContainerHidden isOpen={activeSidebar}>
        <ContainerLogo>
          <Logo src={logo} alt="musitracker" />
        </ContainerLogo>
        <ButtonHidden>
          <AiOutlineHome className="icon" />
        </ButtonHidden>
        <ButtonHidden>
          <AiOutlineCompass className="icon" />
        </ButtonHidden>
        {activeItem && <>
          <ButtonHidden>
            <BiBroadcast className="icon" />
          </ButtonHidden>
          <ButtonHidden>
            <BiTrendingUp className="icon" />
          </ButtonHidden>
          <ButtonHidden>
            <BiMusic className="icon" />
          </ButtonHidden>
        </>}
        <ButtonHidden>
          <BiPodcast className="icon" />
        </ButtonHidden>
        <ButtonHidden>
          <AiOutlineLike className="icon" />
        </ButtonHidden>
        <ButtonHidden>
          <AiOutlineUser className="icon" />
        </ButtonHidden>
        <ButtonHidden>
          <MdOutlineMusicVideo className="icon" />
        </ButtonHidden>
      </SidebarContainerHidden>
      <SidebarContainer isOpen={activeSidebar}>
        <ContainerLogo>
          <Logo src={logo} alt="musitracker" />
        </ContainerLogo>
        <Link to="/home" className='anchor' style={{ textDecoration: "none" }}>
          <Button onClick={handleFalseActiveItem}>
            <div className='effectHover' />
            <HStack>
              <AiOutlineHome className="icon" />
              Home
            </HStack>
          </Button>
        </Link>
        <Button onClick={handleActiveItem}>
          <div className='effectHover' />
          <HStack>
            <AiOutlineCompass className="icon" /> Explore
          </HStack>
          {activeItem
            ? <MdExpandLess className="icon" />
            : <MdExpandMore className="icon" />}
        </Button>
        {
          activeItem && (
            <SubItem>
              <Link to="/trending" className='anchor' style={{ textDecoration: "none" }}>
                <Button className='secondary'>
                  <div className='effectHover' />
                  <BiBroadcast className='subIcon' />
                  Trending Music
                </Button>
              </Link>
              <Link to="/top" className='anchor' style={{ textDecoration: "none" }}>
                <Button className='secondary'>
                  <div className='effectHover' />
                  <BiTrendingUp className='subIcon' />
                  Top Playlists
                </Button>
              </Link>
              <Button className='secondary'>
                <div className='effectHover' />
                <BiMusic className='subIcon' />
                Genres
              </Button>
            </SubItem>
          )
        }
        <Link to="/podcasts" className='anchor' style={{ textDecoration: "none" }}>
          <Button onClick={handleFalseActiveItem}>
            <div className='effectHover' />
            <HStack>
              <BiPodcast className="icon" />
              Podcasts
            </HStack>
          </Button>
        </Link>
        <Link to="/favorites" className='anchor' style={{ textDecoration: "none" }}>
          <Button onClick={handleFalseActiveItem}>
            <div className='effectHover' />
            <HStack>
              <AiOutlineLike className="icon" />Favorites
            </HStack>
          </Button>
        </Link>
        <Link to="/artists" className='anchor' style={{ textDecoration: "none" }}>
          <Button onClick={handleFalseActiveItem}>
            <div className='effectHover' />
            <HStack>
              <AiOutlineUser className="icon" />Artists
            </HStack>
          </Button>
        </Link>
        <Link to="/albums" className='anchor' style={{ textDecoration: "none" }}>
          <Button onClick={handleFalseActiveItem}>
            <div className='effectHover' />
            <HStack>
              <MdOutlineMusicVideo className="icon" />Albums
            </HStack>
          </Button>
        </Link>
      </SidebarContainer>
    </div >
  );
};

export default Sidebar;
