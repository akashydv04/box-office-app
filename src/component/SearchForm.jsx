import { useState, useEffect } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import styled from 'styled-components';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchString, setSearchString] = useSearchStr();
  const [searchOptions, setSearchOptions] = useState('shows');

  console.log('COMPONENT RERENDER');

  useEffect(() => {
    console.log('COMPONENT MOUNTS: Search Option Changes');

    return () => {
      console.log('COMPONENT UNMOUNTS');
    };
  }, [searchOptions]);

  const onSearchInputChange = ev => {
    setSearchString(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOptions(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchString,
      searchOptions,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="Search for something..."
        value={searchString}
        onChange={onSearchInputChange}
      />

      <RadiosWrapper>
        <CustomRadio
          label="Shows"
          name="search-option"
          value="shows"
          checked={searchOptions === 'shows'}
          onChange={onRadioChange}
        />

        <CustomRadio
          label="Actors"
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOptions === 'actors'}
          onChange={onRadioChange}
        />
      </RadiosWrapper>
      {/* 
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOptions === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOptions === 'actors'}
          onChange={onRadioChange}
        />
      </label> */}
      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
