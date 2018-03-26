import React from 'react';
import { Hand } from 'react-deck-o-cards';

const defHandStyle = {
  maxHeight: '30vh',
  minHeight: '30vh',
  maxWidth: '50vw',
  padding: 0
};

const Player = props => {
  if (!props.deck || !props.deck.length) {
    return <div />;
  }
  return (
    <div>
      <Hand onClick={() => {}} cards={props.deck} style={defHandStyle} />
    </div>
  );
};

export default Player;
