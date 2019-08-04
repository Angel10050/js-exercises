/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.
LEVEL 1: 
Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).
Expected Result:
PasswordValidationResult= [false, false, true, true, true]
LEVEL 2:
Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")
Expected Result:
PasswordValidationResult= [false, false, false, true, true]
LEVEL 3:
Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")
Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];
Expected Result:
PasswordValidationResult=  [false, false, false, false, true]
*/

var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];
// var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
// function check(arr, char) {
//   for (let i = 0; i < arr.length; i++) {
//     if (char == arr[i]) {
//       return true
//     }
//   }
// }
// darwin
// function level1(pass) {
//   let arr = pass.split("");
//   let val = arr.some(char => { return check(num, char) });
//   if (arr.length > 5 && val) {
//     return true;
//   }
//   return false
// }
// let res1 = password.map(level1)
// console.log(res1)

// 

//////////////////// no puedo hacer un array directo con las letras o los caracteres porque si hago eso, debo buscar un metodo que comvierta un string en array para que funcione //////////////////
////////////////////////////////////////////////////////////////////// .test()es un metodo para comprobar
// Expreiones regulares

var num = /[0-9]/
var letr = /[a-z]/
var letrM = /[A-Z]/
var char = /[!, #, $, %", .]/
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];


PasswordValidationResult1 = password.map(item => num.test(item) && letr.test(item) && letrM.test(item) && item.length > 5);

PasswordValidationResult2 = password.map(item => num.test(item) && letr.test(item) && letrM.test(item) && item.length > 5 && char.test(item));

PasswordValidationResult3 = password.map(item => num.test(item) && letr.test(item) && letrM.test(item) && item.length > 5 && char.test(item) && !PreviousPassword.includes(item));

console.log(PasswordValidationResult1)
console.log(PasswordValidationResult2)
console.log(PasswordValidationResult3)