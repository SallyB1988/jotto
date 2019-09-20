import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Congrats from './components/congrats/congrats'
import Input from './components/input/input';
import GuessedWords from './components/guessedWords/guessedWords'
import { getSecretWord } from './actions';


export class UnconnectedApp extends Component {

  componentDidMount = () => {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    const { guessedWords, success, secretWord } = this.props;
    return (
      <div className="container">
        <h1 className="title">JOTTO</h1>
        <p>The secret word is {secretWord}</p>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
// we export the connected app by default here, but we still have access
// to using the unconnectedApp version in our tests.