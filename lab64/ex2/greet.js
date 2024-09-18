// Interagindo com o Usuário
// Aprender a capturar entrada do usuário via terminal.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Qual é o seu nome? ', nome => {
    console.log(`Olá ${nome}!`);
    readline.close();
  });