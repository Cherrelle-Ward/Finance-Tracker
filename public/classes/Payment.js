// !Class
//implements HasFormatter now has to follow the interface imported.
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //method
    //interface - format must return a string
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
