export class Card {
  constructor(
    public suit: string,
    public value: string,
  ) {}

  toString() {
    return `${this.value} of ${this.suit}`;
  }
}
