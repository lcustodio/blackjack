import React, { Component } from 'react';
import shuffle from 'shuffle-array';

import scoreCalculator from './service/scoreCalculator';
import { generateDeck } from './service/deckGenerator';

import Player from './components/Player';
import UserActions from './components/UserActions';
import Result from './components/Result';

import './Table.css';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      dealerDeck: [],
      playerDeck: [],
      fullDeck: [],
      isNewGame: true
    };
    this.startNewGame = this.startNewGame.bind(this);
    this.handleHit = this.handleHit.bind(this);
    this.handleStick = this.handleStick.bind(this);
  }

  componentDidMount() {
    this.startNewGame();
  }

  startNewGame() {
    let fullDeck = shuffle(generateDeck());
    const dealerDeck = [fullDeck.pop()];
    const dealerScore = scoreCalculator(dealerDeck);
    const playerDeck = fullDeck.splice(-2, 2);
    const playerScore = scoreCalculator(playerDeck);

    this.setState({
      fullDeck,
      dealerDeck,
      dealerScore,
      playerDeck,
      playerScore,
      isNewGame: true,
      winner: null
    });
  }

  handleHit() {
    const deck = [...this.state.fullDeck];
    const newCard = deck.pop();
    const newPlayerDeck = [...this.state.playerDeck, newCard];
    const newScore = scoreCalculator(newPlayerDeck);

    this.setState({
      isNewGame: false,
      playerScore: newScore,
      playerDeck: newPlayerDeck,
      fullDeck: deck
    });
    if (newScore > 21) {
      this.setState({ winner: 'The house' });
      setTimeout(() => this.startNewGame(), 2000);
    }
  }

  handleStick() {
    const deck = [...this.state.fullDeck];
    const newCard = deck.pop();
    const newDealDeck = [...this.state.dealerDeck, newCard];
    const newScore = scoreCalculator(newDealDeck);

    this.setState({
      isNewGame: false,
      dealerScore: newScore,
      dealerDeck: newDealDeck,
      fullDeck: deck
    });

    if (newScore > 21) {
      this.setState({ winner: 'Player' });
      setTimeout(() => this.startNewGame(), 3000);
      return;
    }

    if (newScore === 21 && this.state.playerScore === 21) {
      this.setState({ winner: 'Draw! Noboby' });
      setTimeout(() => this.startNewGame(), 3000);
      return;
    }

    if (newScore > this.state.playerScore) {
      this.setState({ winner: 'The house' });
      setTimeout(() => this.startNewGame(), 3000);
      return;
    }

    setTimeout(this.handleStick, 1000);
  }

  render() {
    return (
      <div className="Table">
        <header className="Table-header">
          <h1 className="Table-title">Blackjack</h1>
        </header>
        <div className="Table-container">
          <Player deck={this.state.dealerDeck} />
          <UserActions
            isDisabled={this.state.winner}
            startNewGame={this.startNewGame}
            handleHit={this.handleHit}
            handleStick={this.handleStick}
          />
          <Result
            isNewGame={this.state.isNewGame}
            score={{
              player: this.state.playerScore,
              dealer: this.state.dealerScore
            }}
            winner={this.state.winner}
          />
          <Player deck={this.state.playerDeck} />
        </div>
      </div>
    );
  }
}

export default Table;
