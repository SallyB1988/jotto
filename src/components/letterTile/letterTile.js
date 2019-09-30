import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react';

const tileColor =
{
  0: null,
  1: 'red',
  2: 'green',
}


class LetterTile extends Component {
  state = {
    letter: '',
    status: 0,
  }

  handleClick = () => {
    let currentStatus = this.state.status;
    currentStatus === 2 ? currentStatus = 0 : currentStatus++;
    this.setState({ status: currentStatus })
  }

  componentDidMount = (props) => {
    if (this.props && this.props.letter) {
      this.setState({
        letter: this.props.letter.toUpperCase()
      })
    }
  }

  render() {
    const { letter, status } = this.state
    return (
      !!letter ? (
        <Button color={tileColor[status]} onClick={this.handleClick} >
          {letter}
        </Button >
      ) : (
          null
        )
    )
  }
}


LetterTile.propTypes = {
  letter: PropTypes.string,
  status: PropTypes.oneOf([0, 1, 2])
}

export default LetterTile;
