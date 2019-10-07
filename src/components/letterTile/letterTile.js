import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react';

import './letterTile.css';

const tileColor =
{
  0: null,
  1: 'red',
  2: 'green',
}


function LetterTile(props) {
  const { letter } = props;
  const [status, setStatus] = React.useState(0);


  const handleClick = () => {
    let currentStatus = status;
    currentStatus === 2 ? currentStatus = 0 : currentStatus++;
    setStatus(currentStatus);
  }

  return (
    !!letter ? (
      <Button className="tile" color={tileColor[status]} onClick={handleClick} >
        {letter}
      </Button >
    ) : (
        null
      )
  )

}

export default LetterTile;
