import { HasFormatter } from "../interfaces/HasFormatter";

// !Class
//implements HasFormatter now has to follow the interface imported.
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  //method
  //interface - format must return a string
  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}
