import React from 'react'
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils'
import GuessedWords from './guessedWords';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 2
    }
  ]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}



test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are now words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  })
  test('display instructions', () => {
    const instructions = findByTestAttr(wrapper, 'component-instructions');
    expect(instructions.text().length).not.toBe(1);
  });

});

describe('if there are words guessed', () => {

})
