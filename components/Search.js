import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { generateStateString } from '../lib/helpers';

const searchTermState = atom({
  key: 'searchTerm',
  default: '',
});

export const searchResultsState = atom({
  key: 'searchResults',
  value: [],
});

const resultCountState = atom({
  key: 'resultCount',
  value: 20,
});

export const authState = atom({
  key: 'auth',
  value: '',
});

const Search = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [resultCount, setResultCount] = useRecoilState(resultCountState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);
  const [authToken, setAuthToken] = useRecoilState(authState);

  const searchReddit = async () => {
    // if (authToken === '') {
    //   const stateString = generateStateString();
    //   fetch(`https://www.reddit.com/api/v1/authorize?client_id=${process.env.REDDIT_CLIENT_ID}&response_type=code&
    //   state=${stateString}&redirect_uri=${process.env.REDIRECT_URI}&duration=temporary&scope=read`).then(response => {
    //     response.json().then(result => {
    //       console.log('auth result: ', result);
    //     });
    //   });
    // }
    fetch(`https://www.reddit.com/r/mechmarket/new.json?limit=${resultCount}`).then(response => {
      response.json().then(json => {
        setSearchResults(json.data.children);
        console.log('count: ', json.data.children.length);
      });
    });
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Term/Pattern"
        id="searchTerm"
        className="nes-input"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="button" id="btnSearch" className="nes-btn is-primary" onClick={e => searchReddit()}>
        Go!
      </button>
    </div>
  );
};

export default Search;
