const storeCalculator = deck => {
  let aces = 0;
  let score = deck.reduce((aggs, i) => {
    if (i.rank === 1) {
      aces++;
      return aggs + 11;
    }
    let cardScore = i.rank > 9 ? 10 : i.rank;
    return aggs + cardScore;
  }, 0);

  while (aces > 0 && score > 21) {
    aces -= 1;
    score -= 10;
  }
  return score;
};

export default storeCalculator;
