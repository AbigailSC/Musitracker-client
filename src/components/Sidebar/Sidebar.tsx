/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';
import { AiOutlineHome, AiOutlineCompass, AiOutlineLike, AiOutlineUser } from 'react-icons/ai';
import { BiPodcast } from "react-icons/bi"
import { MdOutlineMusicVideo, MdExpandMore, MdExpandLess } from "react-icons/md"
import { Logo, SidebarContainer, Button, HStack, ContainerLogo, Span, SubBtn } from './Sidebar.styles';

interface IButtonProps {
  onClick: (item: string) => void;
  name: string;
  icon?: string;
  isActive: boolean;
  hasSubNav?: boolean;
}

const menuItems = [
  {
    name: 'Home',
    icon: 'home'
  },
  {
    name: 'Explore',
    icon: 'explore',
    items: ['Trending music', 'Top music', 'Genres']
  },
  {
    name: 'Podcasts',
    icon: 'podcasts'
  },
  {
    name: 'Favorites',
    icon: 'favorites'
  },
  {
    name: 'Artists',
    icon: 'artists'
  },
  {
    name: 'Albums',
    icon: 'albums'
  }
];

const Icon = ({ icon }: { icon: string }): JSX.Element => (
  icon === "home" ? <AiOutlineHome style={{ width: "1.5em", height: "1.5em" }} /> :
    icon === "explore" ? <AiOutlineCompass style={{ width: "1.5em", height: "1.5em" }} /> :
      icon === "podcasts" ? <BiPodcast style={{ width: "1.5em", height: "1.5em" }} /> :
        icon === "favorites" ? <AiOutlineLike style={{ width: "1.5em", height: "1.5em" }} /> :
          icon === "artists" ? <AiOutlineUser style={{ width: "1.5em", height: "1.5em" }} /> :
            icon === "albums" ? <MdOutlineMusicVideo style={{ width: "1.5em", height: "1.5em" }} /> :
              icon === "less" ? <MdExpandLess style={{ width: "1.5em", height: "1.5em" }} /> : <MdExpandMore style={{ width: "1.5em", height: "1.5em" }} />
);

const NavButton: FC<IButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav
}) => (
  <Button
    onClick={() => onClick(name)}
  >
    <HStack>
      {icon != null ? <Icon icon={icon} /> : <Span />}
      <span>{name}</span>
    </HStack>
    {hasSubNav === true && (
      <Icon icon={isActive ? 'less' : 'more'} />
    )}
  </Button>
);

const Sidebar: React.FC = () => {

  const [activeItem, setActiveItem] = useState<string>('');

  const handleClick = (item: string): void => {
    setActiveItem(item !== activeItem ? item : '');
  };

  const isSubNavOpen = (item: string, items: string[]): boolean =>
    (items.some((subitem) => subitem === activeItem) || item === activeItem)

  return (
    <SidebarContainer>
      <ContainerLogo>
        <Logo src="./logo.png" alt="musitracker" />
      </ContainerLogo>
      {menuItems.map((item, index) => (
        <div key={index}>
          {(item.items == null) && (
            <NavButton
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              hasSubNav={!!item.items}
            />
          )}
          {(item.items != null) && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav
              />
              <SubBtn
                className={`sub-nav ${isSubNavOpen(item.name, item.items) ? 'open' : ''
                  }`}
              >
                {item.items.map((subitem, index) => (
                  <NavButton
                    onClick={handleClick}
                    name={subitem}
                    isActive={activeItem === subitem}
                    key={index}
                  />
                ))}
              </SubBtn>
            </>
          )}
        </div>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
