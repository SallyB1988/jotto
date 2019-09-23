import React, { Component } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: ''
    }
  }

  submitGuessedWord = (e) => {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    this.setState({ currentGuess: '' })

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }

  render() {
    const { success } = this.props;
    const contents = success ? null :
      (
        <Form className="form-inline">
          <Input
            name="guess-word"
            data-test="input-box"
            type="text"
            value={this.state.currentGuess}
            onChange={(e) => { this.setState({ currentGuess: e.target.value.toUpperCase() }) }}
            placeholder="enter guess"
          />
          <Button
            data-test="submit-button"
            type="submit"
            onClick={this.submitGuessedWord} >
            Submit
          </Button>
        </Form>
      );

    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);