// Servir JSON com Node.js

// O servidor responde com um JSON na rota /api, útil para simular uma API.
// Na rota padrão, ele retorna uma mensagem de erro 404.

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const data = {
            nome: "Servidor Node.js",
            linguagem: "JavaScript",
            uso: "Desenvolvimento Web"
        };
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});