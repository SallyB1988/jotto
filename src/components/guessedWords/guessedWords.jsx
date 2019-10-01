import React from "react";
import { connect } from "react-redux";

import { Grid, Button } from "semantic-ui-react";

import GuessedWordsTable from "../guessedWordsTable/guessedWordsTable";
import { giveUp } from "../../actions";
import "./guessedWords.css";

const GuessedWords = props => {
  const { guessedWords, giveUp } = props;

  return (
    <Grid data-test="component-guessed-words">
      <Grid.Row>
        {guessedWords.length > 0 ? (
          <div data-test="guessed-words">
            <h2 className="heading">Guessed Words</h2>
            <GuessedWordsTable guessedWords={guessedWords} />
          </div>
        ) : (
          <div data-test="component-instructions">
            <h3>Guess a word</h3>
          </div>
        )}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <h3 data-test="number-guesses">
            Words Guessed: {guessedWords.length}
          </h3>
        </Grid.Column>
        <Grid.Column width={8}>
          <Button data-test="component-give-up-button" onClick={giveUp}>
            Give Up
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => {
  const { success, secretWord, giveUp } = state;
  return { success, secretWord, giveUp };
};

export default connect(
  mapStateToProps,
  { giveUp }
)(GuessedWords);
