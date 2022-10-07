"use strict";
const me = {
    name: "shaun",
    age: 10,
    speak(text) {
        console.log(text);
    },
    spend(wage) {
        console.log(`i spent`, wage);
        return wage;
    },
};
