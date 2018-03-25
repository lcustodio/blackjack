import React from 'react';
import { shallow } from 'enzyme';
import { Hand } from 'react-deck-o-cards';

import Player from './index';

describe('Player', () => {
  it('should display one card + one hidden when dealer', () => {
    const expected = shallow(<Player isDealer deck={[{ rank: 1, suit: 1 }]} />);
    expect(expected.find(Hand).length).toEqual(2);
  });

  it('should display one hand when normal user', () => {
    const expected = shallow(<Player deck={[{ rank: 1, suit: 1 }]} />);
    expect(expected.find(Hand).length).toEqual(1);
  });

  it('should handle an empty list of cards', () => {
    const expected = shallow(<Player />);
    expect(expected.html()).toEqual('<div></div>');
  });
});
