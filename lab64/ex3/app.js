// Trabalhando com Módulos
// Entender como criar e usar módulos próprios.

// Script principal

const calc = require('./calc');

console.log("Soma: ", calc.soma(5, 3));
console.log("Subtração: ", calc.subtracao(5, 3));
console.log("Multiplicação: ", calc.mult(5, 3));