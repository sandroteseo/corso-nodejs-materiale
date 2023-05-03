var http = require('http');
var bl = require('bl');

function printResults(results){
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}



function getPromise(index) {
  return new Promise( (resolve, reject) =>{
    http.get(process.argv[2+index], (res) =>{
      res.pipe(bl( (err,data) => {
        if(err)
          reject(err);
        resolve(data.toString());
      } ));
    });
  } );
}
// uso di await
/*
let  httpResolve = async () => {
  let data = [];
  data.push(await getPromise(0));
  data.push(await getPromise(1));
  data.push(await getPromise(2));

  printResults(data);

}

httpResolve();

*/

// uso di all
var arrayPromises = [];
for (var i = 0; i < 3; i++) {
  arrayPromises.push( getPromise(i) );
}


let  resolvePromises = async () => {
  let value = Promise.all(arrayPromises);
  printResults(value);

}

resolvePromises();
