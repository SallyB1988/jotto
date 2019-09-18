import React, { Component } from 'react';
import './App.css';
import Congrats from './components/congrats/congrats'
import GuessedWords from './components/guessedWords/guessedWords'

const guessedWords = [
  {
    guessedWord: "train",
    letterMatchCount: 2
  },
  {
    guessedWord: "tarps",
    letterMatchCount: 4
  },
  {
    guessedWord: "party",
    letterMatchCount: 5
  }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>JOTTO</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

export default App;
