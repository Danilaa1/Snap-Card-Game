# Snap Card Game

A Snap card game implemented in TypeScript. This project demonstrates the implementation of a simple card game, Snap, where players take turns playing cards and call out "Snap!" when they notice matching cards.

## Description

The Snap card game involves players taking turns to play cards from their hands. If the card played matches the card on the table (based on specified rules), the player calls "Snap!" and collects the cards. The game continues until a player has no cards left or a specified number of rounds have been played. The player with the most cards at the end wins.

## Rules of the Game

- The cards are split evenly among the players.
- Each player, in turn, places a card on the table.
- If a player's card matches the top card on the table (based on the game variation), they call "Snap!" and collect the cards on the table.
- The game ends when a player has no cards left or after a set number of rounds.
- The player with the most cards at the end of the game wins.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

To set up this project on your computer, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/snap-card-game-ts.git
   cd snap-card-game-ts
    ```

2. **Install the dependencies**:
   ```sh
   npm install
    ```

3. **Install TypeScript (if not already installed)**:
   ```sh
   npm install -g typescript
    ```

4. **Install ts-node**:
   ```sh
   npm install -g ts-node
   ```

## Usage

To play the Snap card game, run the following command:

```sh
ts-node src/Main/main.ts
```
