// Simular Upload de Arquivos (sem armazenamento real)

// O servidor simula a recepção de dados via upload.
// Quando o cliente envia dados para a rota /upload, o servidor responde que o upload foi simulado com sucesso.

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/upload') {
        let fileData = '';
        req.on('data', chunk => {
            fileData += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Upload simulado com sucesso!');
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

// curl -X POST http://127.0.0.1:3000/upload -F "file=@/Users/matias/workspace/Desenvolvimento-Web/lab64/ex16/arquivo.txt"