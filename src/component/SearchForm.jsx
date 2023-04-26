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
      <input type="text" value={searchString} onChange={onSearchInputChange} />

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
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
