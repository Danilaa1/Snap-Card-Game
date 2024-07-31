import { Player } from "../Player/Player.ts";
import { Card } from "../Card/Card.ts";
import { Deck } from "../Deck/Deck.ts";

//Define the SnapGame class to manage the overall game logic
export class SnapGame {
  private players: Player[] = [];
  private deck: Deck;
  private table: Card[] = [];
  private currentRound: number = 0;

  constructor(
    numPlayers: number,
    numDecks: number,
    private maxRounds: number,
    private variation: "face" | "faceAndSuit",
  ) {
    if (numPlayers < 2 || numPlayers > 4) {
      throw new Error("Number of players must be between 2 and 4");
    }

    this.deck = new Deck(numDecks);

    for (let i = 1; i <= numPlayers; i++) {
      this.players.push(new Player(`Player ${i}`));
    }
  }

  // Deal the cards to the players
  private dealCards(numCardsPerPlayer: number) {
    for (let i = 0; i < numCardsPerPlayer; i++) {
      for (const player of this.players) {
        const card = this.deck.drawCard();
        if (card) {
          player.addCards([card]);
        }
      }
    }
  }

  // Play a single round of the game
  private playRound() {
    this.currentRound++;
    console.log(`Round ${this.currentRound}`);

    for (const player of this.players) {
      const card = player.playCard();
      if (card) {
        console.log(`${player.getName()} plays ${card}`);
        if (this.checkSnap(card)) {
          console.log(`${player.getName()} snaps!`);
          player.addCards([...this.table, card]);
          this.table = [];
        } else {
          this.table.push(card);
        }
      }

      if (player.hasNoCards()) {
        console.log(`${player.getName()} has no cards left!`);
        return;
      }
    }
  }

  // Check if the current card matches the top card on the table
  private checkSnap(card: Card): boolean {
    if (this.table.length === 0) return false;

    const topCard = this.table[this.table.length - 1];
    if (this.variation === "face") {
      return card.value === topCard.value;
    } else if (this.variation === "faceAndSuit") {
      return card.value === topCard.value && card.suit === topCard.suit;
    }
    return false;
  }

  // Determine and announce the winner of the game
  private determineWinner() {
    let winner = this.players[0];
    for (const player of this.players) {
      if (player.getHandSize() > winner.getHandSize()) {
        winner = player;
      }
    }
    console.log(`${winner.getName()} wins with ${winner.getHandSize()} cards!`);
  }

  // Start the game
  public start(numCardsPerPlayer: number) {
    this.dealCards(numCardsPerPlayer);
    while (
      this.currentRound < this.maxRounds &&
      !this.players.some((player) => player.hasNoCards())
    ) {
      this.playRound();
    }
    this.determineWinner();
  }
}
