import React from 'react';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Upvotes</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {articles.map(({ title, upvotes, date }) => (
        <tr data-testid="article" key={title}>
          <td data-testid="article-title">{title}</td>
          <td data-testid="article-upvotes">{upvotes}</td>
          <td data-testid="article-date">{date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Articles;
