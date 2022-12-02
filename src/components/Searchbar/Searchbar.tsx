import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { SearchbarContainer, SearchbarInput, Icon } from './Searchbar.styles';
import { BsSearch } from 'react-icons/bs';
import { useCustomDispatch } from '../../hooks/redux';
import { musicBySearch } from '../../redux/slices/music/index';
import { Link } from 'react-router-dom';

const Searchbar: React.FC = () => {
  const dispatch = useCustomDispatch();
  const [name, setName] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleSearch = (): void => {
    if (name !== '') {
      dispatch(musicBySearch(name));
      setName('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    console.log('enter');
  };
  return (
    <SearchbarContainer>
      <SearchbarInput
        type="text"
        placeholder="Search by artists, songs and albums"
        onChange={(e) => handleInputChange(e)}
        onKeyDown={handleKeyDown}
      />
      <Link to={name === '' ? '' : `/search=${name}`}>
        <Icon onClick={handleSearch}>
          <BsSearch />
        </Icon>
      </Link>
    </SearchbarContainer>
  );
};

export default Searchbar;
