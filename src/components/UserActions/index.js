import React from 'react';

const UserActions = props => (
  <div>
    <button className="UserActions-deal" onClick={props.startNewGame}>
      Deal
    </button>
    <button className="UserActions-hit" onClick={props.handleHit}>
      Hit
    </button>
    <button className="UserActions-stick" onClick={props.handleStick}>
      Stick
    </button>
  </div>
);

export default UserActions;
