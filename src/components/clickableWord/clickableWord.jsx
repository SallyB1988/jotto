import React from "react";
import LetterStrikeOut from "../letterStrikeOut/letterStrikeOut";

import "./clickableWord.css";

const ClickableWord = props => {
  const { word } = props;
  console.log(typeof word);
  console.log(word);
  const wordArray = word.split("");
  console.log(wordArray);
  return (
    <React.Fragment>
      {wordArray.map((letter, idx) => {
        return <LetterStrikeOut key={`${idx}-${letter}`} letter={letter} />;
      })}
    </React.Fragment>
  );
};

export default ClickableWord;
