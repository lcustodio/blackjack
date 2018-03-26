import storeCalculator from './scoreCalculator';

describe('Store Calculator', () => {
  it('should calculate score based on the deck', () => {
    const actualResult = storeCalculator([{ rank: 2, suit: 1 }]);
    expect(actualResult).toBe(2);
  });

  it('should handle aces as default to be 11', () => {
    const actualResult = storeCalculator([{ rank: 1, suit: 1 }]);
    expect(actualResult).toBe(11);
  });

  it('should handle aces that may count as 1 or 11', () => {
    const actualResult = storeCalculator([
      { rank: 1, suit: 1 },
      { rank: 1, suit: 1 },
      { rank: 1, suit: 1 },
      { rank: 10, suit: 1 }
    ]);
    expect(actualResult).toBe(13);
  });
});
