import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { giveUp } from '../../actions';


import GuessedWordsTable from '../guessedWordsTable/guessedWordsTable';

const GuessedWords = (props) => {
  const { guessedWords } = props;

  return (
    <Grid data-test='component-guessed-words'>
      <Grid.Row>
        {guessedWords.length > 0 ?
          <div data-test='guessed-words'>
            <h2>Guessed Words</h2>
            <GuessedWordsTable guessedWords={guessedWords} />
          </div>
          :
          <div data-test='component-instructions'>
            <h3>Guess a word</h3>
          </div>
        }
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <h3 data-test='number-guesses' >Words Guessed: {guessedWords.length}</h3>

        </Grid.Column>
        <Grid.Column width={8} >
          <Button onClick={giveUp}>Give Up</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}


export default GuessedWords;
