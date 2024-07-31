import { Card } from "../Card/Card";

//Define the Player class to manage each player's hand pf cards
export class Player {
  private hand: Card[] = [];

  constructor(public name: string) {}

  //Play a card from the player's hand
  playCard(): Card | undefined {
    return this.hand.pop();
  }

  // Add cards to the player's hand
  addCards(cards: Card[]) {
    this.hand.push(...cards);
  }

  // Check if the player has no cards left
  hasNoCards(): boolean {
    return this.hand.length === 0;
  }

  // Get the number of cards in the player's hand
  getHandSize(): number {
    return this.hand.length;
  }

  // Get the player's name
  getName(): string {
    return this.name;
  }
}
