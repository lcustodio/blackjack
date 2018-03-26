import { generateDeck } from './deckGenerator';

describe('Deck Generator', () => {
  it('should generate a random deck with 52 cards', () => {
    const actualResult = generateDeck();
    expect(actualResult.length).toBe(52);
  });
});
