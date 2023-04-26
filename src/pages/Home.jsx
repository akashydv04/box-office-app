import { useState, useReducer } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../component/SearchForm';
import ShowGrid from '../component/shows/ShowGrid';
import ActorsGrid from '../component/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';
import styled, { css } from 'styled-components';
import { TextCenter } from '../common/TextCenter';

// const Button = styled.button`
/* background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}; */
// `;

// const reducerFn = (currentCounter, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return currentCounter + 1;
//     case 'DECREMENT':
//       return currentCounter - 1;
//     case 'RESET':
//       return 0;
//   }
//   return 0;
// };

const Home = () => {
  const [filter, setFilter] = useState('');

  // const [counter, dispatch] = useReducer(reducerFn, 0);

  // const onIncrement = () => {
  //   dispatch({ type: 'INCREMENT' });
  // };
  // const onDecrement = () => {
  //   dispatch({ type: 'DECREMENT' });
  // };
  // const onReset = () => {
  //   dispatch({ type: 'RESET' });
  // };

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['todos', filter],
    queryFn: () =>
      filter.searchOptions === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  // const [apiData, setApiData] = useState([]);
  // const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOptions }) => {
    setFilter({ q, searchOptions });
    // ev.preventDefault();

    // https://api.tvmaze.com/search/shows?q=girls
    // try {
    //   setApiDataError(null);
    //   let result;

    //   if (searchOptions === 'shows') {
    //     result = await searchForShows(q);
    //   } else {
    //     result = await searchForPeople(q);
    //   }
    //   console.log(result);
    //   setApiData(result);
    // } catch (error) {
    //   console.log(error.message);
    //   setApiDataError(error.message);
    // }

    // const response = await fetch(
    //   `https://api.tvmaze.com/search/shows?q=${searchString}`
    // );
    // const body = await response.json();
    // console.log(body);
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error Occured: {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No Data Found</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    console.log('called');
    return null;
  };

  return (
    <div>
      {/* <Button>Click ME</Button>
      <Button primary>Click ME</Button> */}
      <SearchForm onSearch={onSearch} />
      {/* <div>Counter: {counter}</div>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button> */}
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
