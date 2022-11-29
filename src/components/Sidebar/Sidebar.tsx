/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineCompass, AiOutlineLike, AiOutlineUser } from 'react-icons/ai';
import { BiPodcast } from "react-icons/bi"
import { MdOutlineMusicVideo, MdExpandMore, MdExpandLess } from "react-icons/md"
import { Logo, SidebarContainer, Button, ContainerLogo, HStack, SubItem, Span } from './Sidebar.styles';


const Sidebar: React.FC = () => {

  const [activeItem, setActiveItem] = useState<boolean>(false);

  const handleActiveItem = (): void => {
    setActiveItem(!activeItem)
  }

  const handleFalseActiveItem = (): void => {
    setActiveItem(false)
  }

  return (
    <SidebarContainer>
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
            <Button>
              <div className='effectHover' />
              <Span />
              Trending Music
            </Button>
            <Button>
              <div className='effectHover' />
              <Span />
              Top Music
            </Button>
            <Button>
              <div className='effectHover' />
              <Span />
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
  );
};

export default Sidebar;
