import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUtils'
import GiveUp from './giveUp';

const defaultProps = {
  showWord: false,
  secretWord: 'party'
}

const setup = (initialState = {}, props = {}) => {
  const store = storeFactory(initialState);
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GiveUp store={store} {...setupProps} />).dive().dive();
}

test('component renders nothing when showWord is false', () => {
  const wrapper = setup({ showWord: false });
  const component = findByTestAttr(wrapper, 'component-give-up');
  expect(component.length).toBe(0);
});

test('renders secret word when showWord is true', () => {
  const wrapper = setup({ showWord: true });
  const component = findByTestAttr(wrapper, 'component-show-word');
  expect(component.text()).toContain(defaultProps.secretWord);
});