// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

//----------------------------------------------------------------------------------------------------------//
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplicando(numeros) {
  return numeros * 100;
}
var numerosMultiplicados = numbers.map(multiplicando);
console.log(numerosMultiplicados);
//----------------------------------------------------------------------------------------------------------//

var numerosPorCien = numbers.map(function multiplicando(numeros) {
  return numeros * 100;
});
console.log(numerosPorCien);

//----------------------------------------------------------------------------------------------------------//

var multiplicandoNumeros = numbers.map(function(numeros) {
  return numeros * 100;
});
console.log(multiplicandoNumeros);

//----------------------------------------------------------------------------------------------------------//

var multiplicandoMetodoCorto = numbers.map(numeros => {
  return numeros * 100;
});
console.log(multiplicandoMetodoCorto);

//----------------------------------------------------------------------------------------------------------//

var multipliMuyCorto = numbers.map(numeros => numeros * 100);
console.log(multipliMuyCorto);
