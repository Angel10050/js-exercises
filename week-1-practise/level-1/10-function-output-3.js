function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord + secondWord.concat(thirdWord);
}

var result = concatenate("code", "your", "future");
console.log(result); // expected result = "codeyourfuture"
