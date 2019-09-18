import React from 'react';
import PropTypes from 'prop-types';

import GuessedWordsTable from '../guessedWordsTable/guessedWordsTable';

const GuessedWords = (props) => {
  const { guessedWords } = props;

  return (
    <div data-test='component-guessed-words'>
      {guessedWords.length > 0 ?
        <div data-test='guessed-words'>
          <GuessedWordsTable guessedWords={guessedWords} />
        </div>
        :
        <div data-test='component-instructions'>
          <h3>Guess a word</h3>
        </div>}
    </div>
  )
}


export default GuessedWords;
