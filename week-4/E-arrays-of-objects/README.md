### Arrays of objects

In the past weeks, you've learned about using arrays of numbers, arrays of string etc... In the following, we will learn how to use arrays of objects.

```js
var kitten1 = {
  name: "Fluffy",
  weeksOld: 2
};

var kitten2 = {
  name: "Megatron",
  weeksOld: 1
};

var kitten3 = {
  name: "Billy",
  weeksOld: 5
};

var kittens = [kitten1, kitten2, kitten3];

function isYoungerThan3Weeks(kitten) {
  return kitten.weeksOld <= 3;
}

kittens.filter(isYoungerThan3Weeks); // returns [kitten1, kitten2];
```

```js
function getName(kitten) {
  return kitten.name;
}

kittens.map(getName); // returns ["Fluffy", "Megatron", "Billy"]
```
