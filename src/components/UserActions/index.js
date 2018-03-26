import React from 'react';

const UserActions = props => (
  <div>
    <button
      disabled={props.isDisabled}
      className="UserActions-deal"
      onClick={props.startNewGame}
    >
      Deal
    </button>
    <button
      disabled={props.isDisabled}
      className="UserActions-hit"
      onClick={props.handleHit}
    >
      Hit
    </button>
    <button
      disabled={props.isDisabled}
      className="UserActions-stick"
      onClick={props.handleStick}
    >
      Stick
    </button>
  </div>
);

export default UserActions;
