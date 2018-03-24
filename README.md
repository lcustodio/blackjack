Blackjack
=========

## Rules

1. There is a standard set of 52 cards. When the game starts, the player is given 2 random cards and the dealer is given one which the player can see. Each numbered card has its face value, the ace can be either 1 or 11 and picture cards are worth 10 points.
2. The player is given the following 2 options: ‘hit’ or ‘stick’ (‘hit’ means the player is dealt another card, ‘stick’ means the player does not want another card at that point).
3. The player can ‘hit’ until they are either happy with the sum of the values of their cards or until the total of their cards add up to 21 or over. If their hand is over 21, they lose. Otherwise, if they ‘stick’, the dealer will then start drawing cards until they either have a closer total to 21. If the dealer goes over then the player wins.

## Architecture

This logic behind and the iterations overall are quite simple therefore I'll opt out by using redux.
The flow will be controlled by the main Container Component which will orchestrate the rest of Presentational components.

## Test approach

The game was developped using TDD with unit tests for each of the components. Test can be found on the component folder and suffixed by .test.js
