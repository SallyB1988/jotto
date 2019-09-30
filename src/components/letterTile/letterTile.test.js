import React from 'react';
import { shallow } from 'enzyme';
import { findByComponent } from '../../../test/testUtils';
import LetterTile from './letterTile';
import { Button } from 'semantic-ui-react';
import { exportAllDeclaration, exportDefaultDeclaration } from '@babel/types';


describe('render', () => {
  describe('no props passed', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LetterTile />);
    })

    test('returns null', () => {
      const dummy = wrapper.find(Button);
      expect(dummy.exists()).toBe(false);
    });
  });
})

describe('with props passed', () => {
  test('renders button with proper text', () => {
    let wrapper;
    const letter = "A";
    const status = 0;
    wrapper = shallow(<LetterTile letter={letter} status={status} />);
    console.log(wrapper.debug())


    // const button = wrapper.find(Button)
    console.log('yippee')

    console.log(wrapper.debug())
    console.log('yippee')
    // expect(button.props()).toBe(1)
  });
});

