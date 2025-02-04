import React from 'react'
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils'
import GuessedWords from './guessedWords';
import GuessedWordsTable from '../guessedWordsTable/guessedWordsTable';

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



xtest('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

xdescribe('if there are no words guessed', () => {
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
  test('renders 0 for the total number of guesses', () => {
    const guessesNumber = findByTestAttr(wrapper, 'number-guesses');
    expect(guessesNumber.props().children[1]).toBe(0)
  })
});

xdescribe('if there are words guessed', () => {
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: 2
    },
    {
      guessedWord: "tarps",
      letterMatchCount: 4
    },
    {
      guessedWord: "party",
      letterMatchCount: 5
    }
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  })
  test('renders "guessed words" component', () => {
    const guessed = findByTestAttr(wrapper, 'guessed-words');
    expect(guessed.length).toBe(1);
  })
  test('renders correct number of guessed words', () => {
    const guessed = findByTestAttr(wrapper, 'guessed-words');
    expect(guessed.find(GuessedWordsTable).length).toBe(1);
  })
  test('renders the total number of guesses', () => {
    const guessesNumber = findByTestAttr(wrapper, 'number-guesses');
    expect(guessesNumber.props().children[1]).toBe(guessedWords.length)
  })
})

xdescribe('giveUp action creator call', () => {
  let giveUpMock = jest.fn();

  let wrapper = setup({ guessedWords: [] });

  findByTestAttr(wrapper, 'give-up-button').simulate('click', { preventDefault: () => { } });

  test('calls giveUp when give up button is clicked', () => {
    expect(giveUpMock.mock.calls.length.toBe(1));
  })
})
