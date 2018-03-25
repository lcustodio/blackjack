import React from 'react';
import { Hand } from 'react-deck-o-cards';

const defHandStyle = {
  maxHeight: '30vh',
  minHeight: '30vh',
  maxWidth: '20vw',
  padding: 0
};

const Player = props => {
  if (!props.deck || !props.deck.length) {
    return <div />;
  }
  return (
    <div>
      <Hand cards={props.deck} style={defHandStyle} />
      {props.isDealer && (
        <Hand
          cards={[{ rank: 1, suit: 1 }]}
          hidden={true}
          style={defHandStyle}
        />
      )}
    </div>
  );
};

export default Player;
