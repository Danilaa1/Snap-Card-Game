// This is the Card class which is used to represent a card with suit and value properties
export class Card {
  constructor(
    public suit: string,
    public value: string,
  ) {}

  // Returns the string representation of the card and its suit
  toString() {
    return `${this.value} of ${this.suit}`;
  }
}
