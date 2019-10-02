import React from 'react'
import { shallow } from 'enzyme';
import { storeFactory, findByComponent } from '../test/testUtils';
import Congrats from './components/congrats/congrats';
import Alphabet from './components/alphabet/alphabet';
import GuessedWords from './components/guessedWords/guessedWords';
import App, { UnconnectedApp } from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper
}


describe('render at startup, no guessed words, success = false', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      success: false,
      secretWord: 'party',
    };
    wrapper = setup(initialState);
  })
  test('renders a title', () => {
    expect(findByComponent(wrapper, 'h1').exists()).toBe(true);
  });
  test('does not render Congrats component when success is false', () => {
    expect(findByComponent(wrapper, Congrats).exists()).toBe(true);
    expect(wrapper.find(Congrats).props().success).toBe(false);
  });
  test('does not render GuessedWords component when guessedWords = null', () => {
    expect(findByComponent(wrapper, GuessedWords).exists()).toBe(true);
  })
  test('renders alphabet component', () => {
    expect(wrapper.find(Alphabet).exists()).toBe(true);

  })
});

describe('render with data', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      success: true,
      secretWord: 'party',
      guessedWords: ['hello']
    };
    wrapper = setup(initialState);
  })
  test('renders Congrats component when success = true', () => {
    expect(findByComponent(wrapper, Congrats).exists()).toBe(true);
  });
  test('renders GuessedWords component when guessedWords is not empty', () => {
    expect(findByComponent(wrapper, GuessedWords).exists()).toBe(true);
  })
  test('renders alphabet component', () => {
    expect(findByComponent(wrapper, Alphabet).exists()).toBe(true);
  })
});

describe('redux props', () => {
  test('has access to secret word state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  xtest('has access to success state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);

  })
  xtest('has access to guessedWords state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords)
  })
  xtest('getSecretWord action creator is a function in the props', () => {
    const wrapper = setup({});
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
})

xtest('getSecretWord runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWord: 'train',
  }
  // set up app component with getSecretWordMock as a prop
  const wrapper = shallow(<UnconnectedApp {...props} />);
  // run the componentDidMount lifecycle method
  wrapper.instance().componentDidMount();

  // check if mock ran, and how many times
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);

})