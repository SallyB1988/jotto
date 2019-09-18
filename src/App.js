import React from 'react';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
