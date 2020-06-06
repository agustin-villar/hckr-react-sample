import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Articles from './components/Articles';

const App = ({ articles }) => {
  const [sortedData, setSortedData] = useState(articles);

  function sortByVotes(data) {
    const dataToSort = [...data];
    setSortedData(dataToSort.sort((itemA, itemB) => itemA['upvotes'] - itemB['upvotes']));
  }

  function sortByDate(data) {
    const dataToSort = [...data];
    setSortedData(dataToSort.sort((itemA, itemB) => new Date(itemA['date']) - new Date(itemB['date'])));
  }

  return (
    <div className="App">
      <div className="navigation">
        <button data-testid="top-link" onClick={() => sortByVotes(articles)}>Top</button>
        <button data-testid="newest-link" onClick={() => sortByDate(articles)}>Newest</button>
      </div>
      <Articles articles={sortedData} />
    </div>
  );
};

App.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
