import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
  const { success } = props;
  if (success) return (
    <div className="alert alert-success" data-test="component-congrats" >
      <span data-test="congrats-message">Congratulations! You guess the word!</span>
    </div >
  )
  return (
    <div data-test="component-congrats">Try to guess the secret word</div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;
