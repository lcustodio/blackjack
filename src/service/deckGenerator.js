const generateDeck = () => {
  return [0, 1, 2, 3].reduce((aggs, currentSuit) => {
    let cards = [...Array(13).keys()].map(rank => {
      return { rank: rank + 1, suit: currentSuit };
    });
    return aggs.concat(cards);
  }, []);
};

export { generateDeck };
