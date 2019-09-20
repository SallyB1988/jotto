import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class UnconnectedInput extends Component {

  render() {
    const { success, guessWord } = this.props;
    const contents = success ? null :
      (
        <form className="form-inline">
          <input name="guess-word" data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess" />
          <button
            data-test="submit-button"
            className="bgn btn-primary mb-2"
            type="submit"
            onClick={() => guessWord('train')} >
            Submit
          </button>
        </form>
      );

    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  guessWord: () => dispatch(guessWord)
})

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);
// export default connect(mapStateToProps, { guessWord })(Input);