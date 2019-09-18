import React from 'react'
import { shallow } from 'enzyme';

import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {

  const secretWord = 'party';

  test('returns correct count when no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test('returns correct count when 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when duplicate matching letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('array', secretWord);
    expect(letterMatchCount).toBe(3);
  });

})