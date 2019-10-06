import React from "react";
import PropTypes from "prop-types";
import "./congrats.css";

const Congrats = props => {
  const { success } = props;
  if (success)
    return (
      <div className="alert alert-success" data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guess the word!
        </span>
      </div>
    );
  return (
    <h3 className="instructions" data-test="component-congrats">
      Try to guess the secret word. Enter words and you will be told the number
      of matching letters.
    </h3>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
