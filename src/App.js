import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Articles from './components/Articles';

function sortByVotes(data) {
  const dataToSort = [...data];
  return dataToSort.sort((itemA, itemB) => itemB['upvotes'] - itemA['upvotes']);
}

function sortByDate(data) {
  const dataToSort = [...data];
  return dataToSort.sort((itemA, itemB) => new Date(itemB['date']) - new Date(itemA['date']));
}

const App = ({ articles }) => {
  const [sortedData, setSortedData] = useState(sortByVotes(articles));

  return (
    <div className="App">
      <div className="navigation">
        <button data-testid="top-link" onClick={() => setSortedData(sortByVotes(articles))}>Top</button>
        <button data-testid="newest-link" onClick={() => setSortedData(sortByDate(articles))}>Newest</button>
      </div>
      <Articles articles={sortedData} />
    </div>
  );
};

App.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
