import React from 'react'
import { shallow } from 'enzyme';

import { findByTestAttr, findByComponent, checkProps } from '../../../test/testUtils';
import GuessedWordsTable from './guessedWordsTable';

const defaultProps = {
  words: [
    {
      guessedWord: "train",
      letterMatchCount: 2
    },
    {
      guessedWord: "hokey",
      letterMatchCount: 1
    },
  ]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWordsTable {...setupProps} />)
}


xtest('does not throw warning with expected props', () => {
  checkProps(GuessedWordsTable, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-table-words');
    expect(component.length).toBe(1);
  })
  test('renders display header', () => {
    const header = findByComponent(wrapper, 'thead')
    expect(header.exists()).toBe(true);
  });

});

describe('if there are words guessed', () => {

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
    const component = findByTestAttr(wrapper, 'component-table-words');
    expect(component.length).toBe(1);
  })
  test('renders display header', () => {
    const header = findByComponent(wrapper, 'thead')
    expect(header.exists()).toBe(true);
  });
  test('renders row for each guessed word', () => {
    const header = findByComponent(wrapper, 'tr.guessed-word-row')
    expect(header.length).toBe(guessedWords.length);
  });

});