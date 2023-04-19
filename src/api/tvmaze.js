const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async query => {
  const response = await fetch(`${BASE_URL}${query}`);
  const body = await response.json();
  console.log(`${body}`);
  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);
export const getShowByID = showId =>
  apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
