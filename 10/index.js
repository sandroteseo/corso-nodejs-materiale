const net = require('net');
const port = process.argv[2];

function getDate() {
  let now = new Date();
  return `${now.getFullYear()}-${fillZero(now.getMonth()+1)}-${fillZero(now.getDate())} ${fillZero(now.getHours())}:${fillZero(now.getMinutes())}`;
}

function fillZero(value) {
  if (value < 10)
    return `0${value}`;

  return value;

}

const server = net.createServer(function (socket) {
       // socket handling logic  now.getMinutes()
       socket.write(getDate());
       socket.end('\n');
     });
 server.listen(port);

/*
 const net = require('net')

   function zeroFill (i) {
     return (i < 10 ? '0' : '') + i
   }

   function now () {
     const d = new Date()
     return d.getFullYear() + '-' +
       zeroFill(d.getMonth() + 1) + '-' +
       zeroFill(d.getDate()) + ' ' +
       zeroFill(d.getHours()) + ':' +
       zeroFill(d.getMinutes())
   }

   const server = net.createServer(function (socket) {
     socket.end(now() + '\n')
   })

   server.listen(Number(process.argv[2]))
*/
