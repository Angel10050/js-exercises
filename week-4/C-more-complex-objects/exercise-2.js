/*
    Given the same "house" object again

    Follow the instructions below and then run the file 
    and make sure it outputs the correct results
*/

var newCurrentOwner = {
  firstName: "Margaret",
  lastName: "Conway"
};

var house = {
  isForSale: false,
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "Stephen B."],
  currentOwner: newCurrentOwner
};
/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  "Expected result: true. Actual result: " +
    (house.currentOwner == newCurrentOwner)
);
console.log(
  "Expected result: Claire M., Stephen B. Actual result: " +
    house.previousOwners.toString()
);
console.log("Expected result: false. Actual result: " + house.isForSale);
