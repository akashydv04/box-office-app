import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../component/SearchForm';
import ShowGrid from '../component/shows/ShowGrid';
import ActorsGrid from '../component/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [filter, setFilter] = useState('');

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
      return <div>Error Occured: {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No Data Found</div>;
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
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
