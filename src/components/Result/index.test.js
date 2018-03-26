import React from 'react';
import { shallow } from 'enzyme';

import Result from './index';

describe('Result', () => {
  it('should show play instruction if its a new game', () => {
    const expected = shallow(<Result isNewGame />);
    expect(expected.html()).toContain('Hit or Stick');
  });

  it('should show players score as game evolves', () => {
    const score = { player: 13, dealer: 2 };
    const expected = shallow(<Result isNewGame={false} score={score} />);
    expect(expected.html()).toContain('Player: 13');
  });
});
