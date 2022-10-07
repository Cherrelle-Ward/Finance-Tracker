import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// !type casting
// querySelector is grabbing a class which could be used on many different elements so it doesn't know it is on a 'form' element.
const someForm = document.querySelector(".new-item-form");
// as HTML......then whatever it is will then make the variable someForm into a form element.
// console.log(someForm.children, `i am form`);
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amounts = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// EventListener
someForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //tuples
    let values;
    values = [toFrom.value, details.value, amounts.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    //doc will either be doc or payment
    list.render(doc, type.value, "start");
});
// blue number in console means number and not string.
// !useful examples
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "webwork", 300);
// docTwo = new Payment("mario", "pluming work", 250);
//Implements HasFormatter - Only objects that have hasformatter structure can be inside array.
// let docs: HasFormatter[] = [];
// docs.push(docOne, docTwo);
// console.log(docs, `i am docs`);
//creating an object based on the class
// const invoiceOne = new Invoice("bob", "some details", 250);
//can change values - itis default public
// invoiceOne.client = "yoshiiii";
// const invoiceTwo = new Invoice("mario", "some details", 280);
//only objects created from the invoice class can be added to the array
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne, invoiceTwo);
// console.log(invoices);
// invoices.forEach((x) => {
//   console.log(x.client, x.details, x.amount, x.format());
// });
