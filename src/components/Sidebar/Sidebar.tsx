/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineCompass, AiOutlineLike, AiOutlineUser } from 'react-icons/ai';
import { BiPodcast, BiTrendingUp, BiBroadcast, BiMusic } from "react-icons/bi"
import { MdOutlineMusicVideo, MdExpandMore, MdExpandLess } from "react-icons/md"
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
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div onMouseOver={handleActiveSidebar} onMouseOut={handleDesactiveSidebar}>
      <SidebarContainerHidden isOpen={activeSidebar}>
        <ContainerLogo>
          <Logo src="./logo.png" alt="musitracker" />
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
          <Logo src="./logo.png" alt="musitracker" />
        </ContainerLogo>
        <Button onClick={handleFalseActiveItem}>
          <div className='effectHover' />
          <HStack>
            <AiOutlineHome className="icon" /> <span className='span'>Home</span>
          </HStack>
        </Button>
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
              <Button className='secondary'>
                <div className='effectHover' />
                <BiBroadcast className='subIcon' />
                Trending Music
              </Button>
              <Button className='secondary'>
                <div className='effectHover' />
                <BiTrendingUp className='subIcon' />
                Top Playlists
              </Button>
              <Button className='secondary'>
                <div className='effectHover' />
                <BiMusic className='subIcon' />
                Genres
              </Button>
            </SubItem>
          )
        }
        <Button onClick={handleFalseActiveItem}>
          <div className='effectHover' />
          <HStack>
            <BiPodcast className="icon" /> Podcasts
          </HStack>
        </Button>
        <Button onClick={handleFalseActiveItem}>
          <div className='effectHover' />
          <HStack>
            <AiOutlineLike className="icon" /> Favorites
          </HStack>
        </Button>
        <Button onClick={handleFalseActiveItem}>
          <div className='effectHover' />
          <HStack>
            <AiOutlineUser className="icon" /> Artists
          </HStack>
        </Button>
        <Button onClick={handleFalseActiveItem}>
          <div className='effectHover' />
          <HStack>
            <MdOutlineMusicVideo className="icon" /> Albums
          </HStack>
        </Button>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
