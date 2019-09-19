import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord; //getState returns an object, so we get secretWord property from it
    const letterMatchCount = getLetterMatchCount(secretWord, guessedWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount
      }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      })
    }
  };
}