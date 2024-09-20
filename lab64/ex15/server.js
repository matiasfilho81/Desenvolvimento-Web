// Simulação de Requisições POST com Node.js (sem banco de dados)

// O servidor aceita requisições POST na rota /submit.
// O conteúdo do corpo da requisição é lido e retornado ao cliente.
// Ótimo para explicar como capturar dados enviados de um formulário.

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(`Dados recebidos: ${body}`);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

// curl -X POST http://127.0.0.1:3000/submit -d "nome=Aluno"