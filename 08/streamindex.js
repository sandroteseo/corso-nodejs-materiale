const http = require('http');
const concatStream = require('concat-stream');


   http.get(process.argv[2], function (response) {

     response.pipe(concatStream(function (data) {
       data = data.toString();
       console.log(data.length);
       console.log(data);
     }));
     response.on('error', console.error);
   });
