const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const mime = {
  html: 'text/html', css: 'text/css', js: 'application/javascript',
  json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
  svg: 'image/svg+xml', xml: 'application/xml', txt: 'text/plain', ico: 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, url.parse(req.url).pathname);
  if (filePath.endsWith('/')) filePath += 'index.html';
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not Found'); return; }
    const ext = path.extname(filePath).slice(1);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/html' });
    res.end(data);
  });
});

server.listen(3456, () => console.log('http://localhost:3456'));
