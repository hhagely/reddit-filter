import React from 'react';
import { useRecoilValue } from 'recoil';
import Search, { searchResultsState } from './Search';
import SearchResults from './SearchResults';

const Home = () => {
  const searchResults = useRecoilValue(searchResultsState);

  console.log('results: ', searchResults);

  return (
    <div className="grid">
      <div className="gridRow">
        <Search />
      </div>
      <div className="gridRow">
        <SearchResults />
      </div>
    </div>
  );
};

export default Home;
