import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

import GuessedWordsTable from '../guessedWordsTable/guessedWordsTable';

const GuessedWords = (props) => {
  const { guessedWords } = props;

  return (
    <Grid data-test="component-guessed-words">
      <Grid.Row>
        {guessedWords.length > 0 ?
          <div data-test='guessed-words' >
            <h2>Guessed Words</h2>
            <GuessedWordsTable guessedWords={guessedWords} />
          </div>
          :
          <div data-test='comnponent-instructions'>
            <h3>Guess a word</h3>
          </div>
        }
      </Grid.Row>
    </Grid>
  )
}


export default GuessedWords;
