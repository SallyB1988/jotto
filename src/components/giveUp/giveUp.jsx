import React from 'react';
import PropTypes from 'prop-types';

const GiveUp = (props) => {
  const { showWord, secretWord } = props;
  return (
    showWord ? (
      <div className="alert alert-success" data-test="component-give-up" >
        <span data-test="component-show-word">The word was: {secretWord}</span>
      </div >
    ) : (
        null
      ))
}

GiveUp.propTypes = {
  showWord: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
}

export default GiveUp;
