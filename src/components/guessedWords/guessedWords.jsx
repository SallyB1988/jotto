import React from 'react';
import PropTypes from 'prop-types';
import { stringLiteral } from '@babel/types';

const GuessedWords = (props) => {
  const { guessedWords } = props;

  return (
    <div data-test='component-guessed-words'>
      {guessedWords.length > 0 ?
        <div /> :
        <div data-test='component-instructions'>
          <h3>Guess a word</h3>
        </div>}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    }).isRequired,
  )
}

export default GuessedWords;
