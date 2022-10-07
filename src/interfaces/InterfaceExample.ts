//!interfaces
// - They define the structure of object types.
// Interfaces allow inheritance:
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "shaun",
  age: 10,
  speak(text: string): void {
    console.log(text);
  },
  spend(wage: number): number {
    console.log(`i spent`, wage);
    return wage;
  },
};
