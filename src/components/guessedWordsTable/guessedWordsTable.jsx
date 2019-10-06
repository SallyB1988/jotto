import React from "react";
import { Table } from "semantic-ui-react";
import ClickableWord from "../clickableWord/clickableWord";

const GuessedWordsTable = props => {
  const { guessedWords } = props;

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Guessed Word</Table.HeaderCell>
          <Table.HeaderCell># Matching Letters</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {guessedWords.map((word, idx) => {
          return (
            <Table.Row
              className="guessed-word-row"
              key={`${word}-${idx}`}
              data-test="guessed-word-row"
            >
              <Table.Cell>
                <ClickableWord word={word.guessedWord} />
              </Table.Cell>
              <Table.Cell>{word.letterMatchCount}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default GuessedWordsTable;
