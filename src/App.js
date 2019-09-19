import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Congrats from './components/congrats/congrats'
import Input from './components/input/input';
import GuessedWords from './components/guessedWords/guessedWords'
import { getSecretWord } from './actions';


class App extends Component {
  componentDidMount = () => {

  }
  render() {
    const { guessedWords, secretWord, success } = this.props;
    return (
      <div className="container">
        <h1 className="title">JOTTO</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSecretWord: () => dispatch(getSecretWord)
})
const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
