import { Card } from "../Card/Card";

// Deck class to manage a collection of cards
export class Deck {
  private cards: Card[] = [];

  //Initializing the deck with the specified number of decks
  constructor(numDecks: number) {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    /*
      1. Looping through the number of decks specified.
      2. We are looping through each suit.
      3. We are looping through each value.
      4. We are creating a new card object with the current suit and value and adding it to the cards array.
    */
    for (let i = 0; i < numDecks; i++) {
      for (const suit of suits) {
        for (const value of values) {
          this.cards.push(new Card(suit, value));
        }
      }
    }

    this.shuffle();
  }

  // Method to shuffle the deck of cards and for this we are using the Fisher Yates algorithm.
  private shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // Method to draw a card from the deck
  drawCard(): Card | undefined {
    return this.cards.pop();
  }

  // Check if the deck is empty: returns true if the deck is empty, false otherwise.
  isEmpty(): boolean {
    return this.cards.length === 0;
  }
}
