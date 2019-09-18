import _ from 'lodash'

export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split('');
  const guessedLetters = guessedWord.split('');
  return _.intersection(secretLetters, guessedLetters).length
};