function s(w1, w2) {
  return w1.concat(w2);
}

var result = s("code", "your");
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
//R/: .concat concant the first with second parameter.
// - How many parameters does the function take?
//R/: it takes two parameters
// - What is the function name?
//R/: the function name is 's'
// - Where is the function called? with what parameters?
//R/:it is called in var result with parameters 'code', and 'your'
// - What does the function return?
//R/:it returns 'codeyour'
// - How can this function be improved?
function joiningParameters(w1, w2, w3) {
  return w1 + w2.concat(w3);
}

var result = joiningParameters("code", "your", "future");
console.log(result);
