import React from 'react';
import './index.css';

const Result = props => {
  const content = () => {
    if (props.isNewGame) {
      return <div>Hit or Stick</div>;
    }

    return (
      <div>
        {props.winner && <div>{props.winner} won! </div>}
        <div>Player: {props.score.player}</div>
        <div>Dealer: {props.score.dealer}</div>
      </div>
    );
  };

  return <div className="Result"> {content()}</div>;
};

export default Result;
