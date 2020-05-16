import React, { useState } from 'react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [resultCount, setResultCount] = useState(20);

  const searchReddit = async () => {
    fetch(`https://www.reddit.com/r/mechmarket/new/.json?count=${resultCount}`)
      .then(response => {
        response.json().then(json => {
          setResults(json.data.children);
          console.log('data: ', json.data.children);
        })
      });
  };

  return (
  <div className="grid">
    <div className="nes-field">
      <label htmlFor="searchTerm">Search Term</label>
      <input type="text" id="searchTerm" className="nes-input" onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    <div className="nes-field">
      <button className="nes-btn is-primary" onClick={(e) => searchReddit()}>Go!</button>
    </div>
  </div>
);
};

export default Home;
