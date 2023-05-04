const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer( (req,res) =>{
  console.log(req.url);
  res.writeHead(200, { 'content-type' : 'text-plain' });

  fs.createReadStream(file).pipe(res);
});

server.listen(Number(port), ()=>{
  console.log(`Server started: localhost:${port}`);
});


/*
var http = require('http');
var fs = require('fs');

var server = http.createServer( (req,res) =>{
  res.writeHead(200, { 'content-type' : 'text-plain' });
  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
*/
