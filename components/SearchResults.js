import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultsState } from './Search';

const SearchResults = () => {
  const searchResults = useRecoilValue(searchResultsState);

  return (
    <>{searchResults?.length > 0 && <div className="nes-container">results: {JSON.stringify(searchResults)}</div>}</>
  );
};

export default SearchResults;
