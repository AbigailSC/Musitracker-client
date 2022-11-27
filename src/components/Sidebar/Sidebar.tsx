/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineCompass, AiOutlineLike, AiOutlineUser } from 'react-icons/ai';
import { BiPodcast } from "react-icons/bi"
import { MdOutlineMusicVideo, MdExpandMore, MdExpandLess } from "react-icons/md"
import { Logo, SidebarContainer, Button, ContainerLogo, HStack, SubItem } from './Sidebar.styles';


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
        <HStack>
          <AiOutlineHome style={{ width: "1.5em", height: "1.5em" }} /> Home
        </HStack>
      </Button>
      <Button onClick={handleActiveItem}>
        <HStack>
          <AiOutlineCompass style={{ width: "1.5em", height: "1.5em" }} /> Explore
        </HStack>
        {activeItem
          ? <MdExpandLess style={{ width: "1.5em", height: "1.5em" }} />
          : <MdExpandMore style={{ width: "1.5em", height: "1.5em" }} />}
      </Button>
      {
        activeItem && (
          <SubItem>
            <Button>
              Trending Music
            </Button>
            <Button>
              Top Music
            </Button>
            <Button>
              Genres
            </Button>
          </SubItem>
        )
      }
      <Button onClick={handleFalseActiveItem}>
        <HStack>
          <BiPodcast style={{ width: "1.5em", height: "1.5em" }} /> Podcasts
        </HStack>
      </Button>
      <Button onClick={handleFalseActiveItem}>
        <HStack>
          <AiOutlineLike style={{ width: "1.5em", height: "1.5em" }} /> Favorites
        </HStack>
      </Button>
      <Button onClick={handleFalseActiveItem}>
        <HStack>
          <AiOutlineUser style={{ width: "1.5em", height: "1.5em" }} /> Artists
        </HStack>
      </Button>
      <Button onClick={handleFalseActiveItem}>
        <HStack>
          <MdOutlineMusicVideo style={{ width: "1.5em", height: "1.5em" }} /> Albums
        </HStack>
      </Button>
    </SidebarContainer>
  );
};

export default Sidebar;
