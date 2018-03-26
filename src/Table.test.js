import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';
import Player from './components/Player';

import * as deckGenerator from './service/deckGenerator';

describe('Table', () => {
  describe('Shuffle deck', () => {
    it('should give 1 card to the dealer', () => {
      const expected = shallow(<Table />);
      expect(expected.state('dealerDeck').length).toBe(1);
    });

    it('should give 2 cards to the player', () => {
      const expected = shallow(<Table />);
      expect(expected.state('playerDeck').length).toBe(2);
    });

    it('should left 49 on the deck', () => {
      const expected = shallow(<Table />);
      expect(expected.state('fullDeck').length).toBe(49);
    });
  });

  describe('Hit', () => {
    beforeEach(() => {
      jest.clearAllTimers();
    });

    it('should give new cards to user if it is still possible', () => {
      const mock = jest.spyOn(deckGenerator, 'generateDeck');
      mock.mockReturnValueOnce(
        Array(4)
          .fill()
          .map(() => ({ suit: 1, rank: 4 }))
      );

      const expected = shallow(<Table />);

      expect(expected.state('dealerDeck').length).toBe(1);
      expect(expected.state('playerDeck').length).toBe(2);
      expect(expected.state('fullDeck').length).toBe(1);

      expected.instance().handleHit();
      expect(expected.state('playerDeck').length).toBe(3);
    });

    it('should should start a new game if player sums more than 21', () => {
      jest.useFakeTimers();

      const mock = jest.spyOn(deckGenerator, 'generateDeck');
      mock.mockImplementation(() =>
        Array(4)
          .fill()
          .map(() => ({ suit: 1, rank: 9 }))
      );

      const expected = shallow(<Table />);

      expect(expected.state('dealerDeck').length).toBe(1);
      expect(expected.state('playerDeck').length).toBe(2);
      expect(expected.state('fullDeck').length).toBe(1);

      expected.instance().handleHit();
      jest.runOnlyPendingTimers();
      expect(expected.state('playerDeck').length).toBe(2);
    });
  });

  describe('Stick', () => {
    jest.useFakeTimers();
    beforeEach(() => {
      jest.clearAllTimers();
    });

    it('should give new cards to dealer if it is still possible', () => {
      const mock = jest.spyOn(deckGenerator, 'generateDeck');
      mock.mockReturnValueOnce(
        Array(6)
          .fill()
          .map(() => ({ suit: 1, rank: 4 }))
      );
      const expected = shallow(<Table />);

      expect(expected.state('dealerDeck').length).toBe(1);
      expect(expected.state('playerDeck').length).toBe(2);
      expect(expected.state('fullDeck').length).toBe(3);

      expected.instance().handleStick();
      expect(expected.state('dealerDeck').length).toBe(2);
      expected.instance().handleStick();
      expect(expected.state('dealerDeck').length).toBe(3);
      expected.instance().handleStick();
      expect(expected.state('dealerDeck').length).toBe(4);
    });

    it('should start a new game if dealer sums more than 21', () => {
      const mock = jest.spyOn(deckGenerator, 'generateDeck');
      mock.mockImplementation(() =>
        Array(5)
          .fill()
          .map(() => ({ suit: 1, rank: 9 }))
      );

      const expected = shallow(<Table />);

      expect(expected.state('dealerDeck').length).toBe(1);
      expect(expected.state('playerDeck').length).toBe(2);
      expect(expected.state('fullDeck').length).toBe(2);

      const instance = expected.instance();
      instance.handleStick();
      jest.runTimersToTime(100);
      expect(expected.state('dealerDeck').length).toBe(2);
      jest.runTimersToTime(4000);
      expect(expected.state('dealerDeck').length).toBe(1);
    });

    it('should draw if both players get 21', () => {
      const mock = jest.spyOn(deckGenerator, 'generateDeck');
      mock.mockImplementation(() =>
        Array(6)
          .fill()
          .map(() => ({ suit: 1, rank: 7 }))
      );

      const expected = shallow(<Table />);

      expect(expected.state('dealerDeck').length).toBe(1);
      expect(expected.state('playerDeck').length).toBe(2);
      expect(expected.state('fullDeck').length).toBe(3);

      const instance = expected.instance();
      instance.handleHit();
      instance.handleStick();
      jest.runTimersToTime(100);
      expect(expected.state('dealerDeck').length).toBe(2);
      jest.runTimersToTime(1000);
      expect(expected.state('winner')).toEqual('Draw! Noboby');
    });
  });
});
