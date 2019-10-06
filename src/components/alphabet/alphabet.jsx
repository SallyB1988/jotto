import React, { Component, Fragment } from "react";
import LetterTile from "../letterTile/letterTile";

const letterValues = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

class Alphabet extends Component {
  state = {
    letters: []
  };

  componentDidMount() {
    let letters = [];
    letterValues.forEach(letter => {
      letters.push({ letter, status: 0 });
    });
    this.setState({ letters: letters });
  }

  render() {
    return (
      <Fragment>
        {this.state.letters.map((l, idx) => {
          return (
            <LetterTile
              key={`${l}-${idx}`}
              letter={l.letter}
              status={l.status}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default Alphabet;
