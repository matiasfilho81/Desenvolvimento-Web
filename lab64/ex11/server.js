// fonte: https://www.mundojs.com.br/2019/11/29/exemplo-pratico-node-js/

// Exemplo simples de um servidor web criado usando o Node.js com o módulo http.

const http = require('http'); // Importação do Módulo HTTP
const hostname = '127.0.0.1'; // Definição de Hostname e Porta:
const port = 3000;

// Essas linhas definem o hostname (ou endereço IP) e a porta onde o servidor será acessado. 127.0.0.1 é o endereço de loopback (localhost), que aponta para a própria máquina, e 3000 é a porta na qual o servidor escuta.

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola Mundo!\nBem vindo ao nodejs');
});

// Esta é a parte central do código onde o servidor é criado. A função http.createServer() recebe uma função de callback que é chamada sempre que uma requisição é recebida. Dentro desta função:
// 	•	res.statusCode = 200; define o código de status da resposta HTTP como 200, indicando sucesso.
// 	•	res.setHeader('Content-Type', 'text/plain'); define o cabeçalho da resposta para indicar que o conteúdo retornado é texto puro.
// 	•	res.end('Ola Mundo!\nBem vindo ao nodejs'); envia a resposta para o cliente e encerra a resposta. O texto “Ola Mundo!\nBem vindo ao nodejs” é enviado como corpo da resposta.

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// O servidor é iniciado com o método listen(), especificando a porta e o hostname onde ele deve escutar por requisições. 
// A função de callback dentro de listen() é chamada assim que o servidor começa a escutar, informando no console que o
// servidor está rodando e pronto para receber requisições.