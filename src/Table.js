import React, { Component } from 'react';
import './Table.css';

import Player from './components/Player';
import UserActions from './components/UserActions';
import Result from './components/Player';

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <header className="Table-header">
          <h1 className="Table-title">Blackjack</h1>
        </header>
        <div className="Table-container">
          <Result />
          <Player />
          <UserActions />
          <Player />
        </div>
      </div>
    );
  }
}

export default Table;
