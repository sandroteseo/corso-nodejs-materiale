const http = require('http');
const map = require('through2-map');
const port = process.argv[2];


const server = http.createServer( (req,res) =>{
  if(req.method !== 'POST')
    return res.end('Only POST please');

  req.pipe(map( (chunk) => chunk.toString().toUpperCase() )).pipe(res);
});

server.listen(Number(port), ()=>{
  console.log(`Server started: localhost:${port}`);
});


/*
var http = require('http');
var map = require('through2-map');

var server = http.createServer( (req,res) =>{
  if(req.method !== 'POST')
    return res.end('Only POST please');

  req.pipe(map( this.toString().toUpperCase()  ) ).pipe(res);
});

server.listen(Number(process.argv[2]));
*/
