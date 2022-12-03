import React, { ChangeEvent, useState } from 'react';
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

  // const handleKeyDown = (e: KeyboardEvent<HTMLElement>): void => {
  //   if (e.key === 'Enter') {
  //     handleSearch();
  //   }
  // };

  // onKeyDown={handleKeyDown} in searchbar input
  return (
    <SearchbarContainer>
      <SearchbarInput
        type="text"
        placeholder="Search by artists, songs and albums"
        onChange={(e) => handleInputChange(e)}
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
