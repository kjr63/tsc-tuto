console.log ("tsc tuto\n");

let firstName: string;
firstName = "Liisa";
console.log ("string esim:", firstName);

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
//ourTuple = [false, 'Coding God was mistaken', 5];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
//ourReadonlyTuple = [5, false, 'Coding God was here'];

enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log("enum: ",currentDirection);