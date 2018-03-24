import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <header className="Table-header">
          <h1 className="Table-title">Blackjack</h1>
        </header>
        <p className="Table-container">Game is about to start</p>
      </div>
    );
  }
}

export default Table;
