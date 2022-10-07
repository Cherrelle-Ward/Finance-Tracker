// !Class
//implements HasFormatter now has to follow the interface imported.
export class Invoice {
    //! amount can be seen inside and out but not changed
    constructor(c, d, a) {
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
