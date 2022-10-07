import { HasFormatter } from "../interfaces/HasFormatter";

// !Class
//implements HasFormatter now has to follow the interface imported.
export class Invoice implements HasFormatter {
  public client: string;

  details: string; // !putting private would mean details can only be accessed inside the class - at format, not outside on the forEach.

  readonly amount: number;
  //! amount can be seen inside and out but not changed

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  //method
  //interface - format must return a string
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
