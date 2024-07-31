import * as readline from "readline";
import { SnapGame } from "../Game/SnapGame";

// Function to set up the game with user input
export function setupGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Asking for the number of players
  rl.question("Number of players (2 - 4): ", (numPlayersStr) => {
    const numPlayers = parseInt(numPlayersStr, 10);
    if (isNaN(numPlayers) || numPlayers < 2 || numPlayers > 4) {
      console.log(
        "Invalid number of players. Please enter a number between 2 and 4",
      );
      rl.close();
      return;
    }

    // Asking for the number of decks
    rl.question("Number of decks (1 - 4): ", (numDecksStr) => {
      const numDecks = parseInt(numDecksStr, 10);
      if (isNaN(numDecks) || numDecks < 1 || numDecks > 4) {
        console.log(
          "Invalid number of decks. Please enter a number between 1 and 4",
        );
        rl.close();
        return;
      }

      // We are calculating the maximum number of cards per player
      const totalCards = numDecks * 52;
      const maxCardsPerPlayer = Math.floor(totalCards / numPlayers);

      // Asking for the number of cards per player
      rl.question(
        `Number of cards per player (1-${maxCardsPerPlayer})`,
        (numCardsStr) => {
          const numCardsPerPlayer = parseInt(numCardsStr, 10);
          if (
            isNaN(numCardsPerPlayer) ||
            numCardsPerPlayer < 1 ||
            numCardsPerPlayer > maxCardsPerPlayer
          ) {
            console.log(
              `Invalid number of cards. Please enter a number between 1 and ${maxCardsPerPlayer}.`,
            );
            rl.close();
            return;
          }

          // Set default values for the maximum number of rounds and variation
          const maxRounds = 15;
          const variation: "face" | "faceAndSuit" = "face";

          // Create and start the game instance with the user inputs
          const game = new SnapGame(numPlayers, numDecks, maxRounds, variation);
          game.start(numCardsPerPlayer);
          rl.close();
        },
      );
    });
  });
}
