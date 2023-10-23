console.log("tsc tuto\n");
var firstName;
firstName = "Liisa";
console.log("string esim:", firstName);
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
//ourTuple = [false, 'Coding God was mistaken', 5];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
// instead use our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
//ourReadonlyTuple = [5, false, 'Coding God was here'];
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log("enum: ", currentDirection);
