const http = require('http');
const Mensagem = require('./mensagem');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');


    const baseURL = `http://${req.headers.host}`;
    const urlAnalisada = new URL(req.url, baseURL);

    if (urlAnalisada.pathname === '/api/mensagem' && req.method === 'GET') {
    
    const textoUsuario = urlAnalisada.searchParams.get('texto');
    const autorUsuario = urlAnalisada.searchParams.get('autor');

    if (!textoUsuario || !autorUsuario) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ erro: 'Por favor, envie texto e autor na URL.' }));
    }
    const minhaMensagem = new Mensagem(textoUsuario, autorUsuario);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(minhaMensagem.toJSON()));
    
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
});

server.listen(3000, () => console.log('Rodando Servidor local'));