import React from 'react';
import PropTypes from 'prop-types';

const GuessedWordsTable = (props) => {
  const { guessedWords } = props;

  return (
    <table className="table table-sm" data-test='component-table-words'>
      <thead className='thead-light table-head' data-test='table-header'>
        <tr>
          <th>Guess</th>
          <th>Matching Letters</th>
        </tr>
      </thead>
      <tbody>
        {guessedWords.map((word, idx) => (
          <tr className="guessed-word-row" key={`${word}-${idx}`} data-test='guessed-word-row'>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


export default GuessedWordsTable;
