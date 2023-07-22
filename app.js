const express = require('express');
const app = express();

let helloCount = 0;

// Rota para /hello que incrementa o contador e retorna "Hello, World!"
app.get('/hello', (req, res) => {
  helloCount++;
  res.send('Hello, World!');
});

// Rota para /metrics que expõe o contador como uma métrica no formato Prometheus
app.get('/metrics', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`hello_requests_total ${helloCount}`);
});

// Inicia o servidor na porta 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Aplicação web em execução na porta ${port}`);
});
