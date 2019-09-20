import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Container, Grid } from 'semantic-ui-react';

import Congrats from './components/congrats/congrats'
import Input from './components/input/input';
import GiveUp from './components/giveUp/giveUp';
import GuessedWords from './components/guessedWords/guessedWords'
import { getSecretWord } from './actions';


export class UnconnectedApp extends Component {

  state = {
    giveUp: false
  }

  componentDidMount = () => {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    const { guessedWords, success, secretWord, giveUp } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Container textAlign='center'>
              <h1>JOTTO!</h1>
            </Container>
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={8}>
            <p>The secret word is {secretWord}</p>
            <Congrats success={success} />
            <Input />
            <GuessedWords guessedWords={guessedWords} />
            <GiveUp showWord={giveUp} secretWord={secretWord} />
          </Grid.Column>
          <Grid.Column width={4}>
            <h3>Put alphabet here</h3>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>

    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord, giveUp } = state;
  return { success, guessedWords, secretWord, giveUp }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
// we export the connected app by default here, but we still have access
// to using the unconnectedApp version in our tests.