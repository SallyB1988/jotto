import React, { useState } from "react";

import "./letterStrikeOut.css";

/**
 * Creates a clickable letter that toggles a strike-out character
 */
const LetterStrikeOut = props => {
  const { letter } = props;

  const [strikeOut, setStrikeOut] = useState("");

  const handleClick = () => {
    strikeOut === "" ? setStrikeOut("/") : setStrikeOut("");
  };

  return strikeOut ? (
    <h4 className="letter strike-out" onClick={handleClick}>
      {letter}
    </h4>
  ) : (
    <h4 className="letter" onClick={handleClick}>
      {letter}
    </h4>
  );
};

export default LetterStrikeOut;
