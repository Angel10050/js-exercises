// You have been given an array of percetages
// 1. Write a function that formats the numbers into a string with the percentage symbol appended e.g. "10%"
// 2. Declare a new array, `percentagesFormatted`, containing
//    - each item in `percentages` formatted by your function

var percentages = [1, 23, 92, 18];

function format(percentages) {
  var aux = Array.from(percentages);
  for (let i = 0; i < percentages.length; i++) {
    aux[i] += "%";
  }
  return aux;
}

console.log(format(percentages));

/* 
  EXPECTED RESULT
  ---------------
  [1%, 23%, 92%, 18%]
*/
