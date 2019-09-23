import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import giveUp from './giveUp';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  giveUp
});
