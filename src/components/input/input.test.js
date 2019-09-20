import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Input, { UnconnectedInput } from './input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        success: true
      }
      wrapper = setup(initialState);
    })

    test('renders component without crashing', () => {
      const componentInput = findByTestAttr(wrapper, 'component-input');
      expect(componentInput.length).toBe(1)
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0)
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0)
    })
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        success: false
      };
      wrapper = setup(initialState);
    });

    test('renders component without crashing', () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    })
  });
})

describe('redux props', () => {
  test('receives success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  test('guessedWord action creator is a function prop', () => {
    const wrapper = setup({});
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
})

describe('guessWord action creator call', () => {

  test('guessWord is called when submit button is clicked', () => {
    const guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
      guessedWord: 'train'
    }
    const wrapper = shallow(<UnconnectedInput {...props} />);
    // check if guessWord function runs when button is clicked
    findByTestAttr(wrapper, 'submit-button').simulate('click');
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  })
})