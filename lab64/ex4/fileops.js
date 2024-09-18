// Trabalhando com Arquivos
// Aprender a ler e escrever arquivos usando o módulo fs.

const fs = require('fs');

fs.writeFile('message.txt', 'Olá, mundo!', function (err) {
  if (err) throw err;
  console.log('Arquivo criado!');
});

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Dados do arquivo:', data);
});