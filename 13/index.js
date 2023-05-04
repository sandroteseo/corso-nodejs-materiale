var http = require('http');
var url = require('url');

var server = http.createServer( (req,res) =>{
  var parse = url.parse(req.url, true);
  var date = new Date(parse.query.iso);
  var result;

  switch (parse.pathname) {
    case '/api/parsetime':
      result = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
      break;
    case '/api/unixtime':
      result = { unixtime: date.getTime() };
      break;
  }

  if(result){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end( JSON.stringify(result) );
  }else{
    res.end();
  }

});

server.listen(Number(process.argv[2]));


/*
const http = require('http')

   function parsetime (time) {
     return {
       hour: time.getHours(),
       minute: time.getMinutes(),
       second: time.getSeconds()
     }
   }

   function unixtime (time) {
     return { unixtime: time.getTime() }
   }

   const server = http.createServer(function (req, res) {
     const parsedUrl = new URL(req.url, 'http://example.com')
     const time = new Date(parsedUrl.searchParams.get('iso'))
     let result

     if (/^\/api\/parsetime/.test(req.url)) {
       result = parsetime(time)
     } else if (/^\/api\/unixtime/.test(req.url)) {
       result = unixtime(time)
     }

     if (result) {
       res.writeHead(200, { 'Content-Type': 'application/json' })
       res.end(JSON.stringify(result))
     } else {
       res.writeHead(404)
       res.end()
     }
   })
   server.listen(Number(process.argv[2]))
   */
