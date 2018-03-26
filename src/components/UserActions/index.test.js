import React from 'react';
import { shallow } from 'enzyme';

import UserActions from './index';

describe('Player', () => {
  it('should trigger `startNewGame` when Deal is clicked', () => {
    const mockCallback = jest.fn();

    const expected = shallow(<UserActions startNewGame={mockCallback} />);
    expected.find('.UserActions-deal').simulate('click');

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should trigger `handleHit` when Hit is clicked', () => {
    const mockCallback = jest.fn();

    const expected = shallow(<UserActions handleHit={mockCallback} />);
    expected.find('.UserActions-hit').simulate('click');

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should trigger `handleStick` when Stick is clicked', () => {
    const mockCallback = jest.fn();

    const expected = shallow(<UserActions handleStick={mockCallback} />);
    expected.find('.UserActions-stick').simulate('click');

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should disable the buttons if someone won the game', () => {
    const mockCallback = jest.fn();

    const expected = shallow(
      <UserActions isDisabled={true} handleStick={mockCallback} />
    );
    expect(expected.find('.UserActions-stick').html()).toContain('disabled');
  });
});
