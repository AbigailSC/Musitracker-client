import React from 'react';
import { SearchbarContainer, SearchbarInput, Icon } from './Searchbar.styles';
import { BsSearch } from 'react-icons/bs';

const Searchbar: React.FC = () => {
  return (
    <SearchbarContainer>
      <SearchbarInput
        type="text"
        placeholder="Search artists, songs and albums"
      />
      <Icon>
        <BsSearch />
      </Icon>
    </SearchbarContainer>
  );
};

export default Searchbar;
