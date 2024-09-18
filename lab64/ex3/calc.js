// Trabalhando com Módulos
// Entender como criar e usar módulos próprios.

// Módulo

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

module.exports = { soma, subtracao, mult };