import React from 'react'
import { shallow } from 'enzyme';
import { storeFactory, findByComponent } from '../test/testUtils';
import App from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper
}

setup();

describe('render', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      success: false,
      secretWord: 'party'
    };
    wrapper = setup(initialState);
  })
  test('renders a title', () => {
    expect(findByComponent(wrapper, 'h1.title').exists()).toBe(true);
  });
  test('renders GuessedWords component', () => {
    expect(findByComponent(wrapper, 'Congrats').exists()).toBe(true);
  });
  test('renders congrats component', () => {
    expect(findByComponent(wrapper, 'GuessedWords').exists()).toBe(true);

  })
});

describe('redux props', () => {
  test('has access to secret word state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to success state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);

  })
  test('has access to guessedWords state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords)
  })
  test('getSecretWord action creator is a function in the props', () => {
    const wrapper = setup({});
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
})