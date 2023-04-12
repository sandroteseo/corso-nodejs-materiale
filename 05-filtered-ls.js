const fs = require('fs');
const path = require('path');

const dirpath = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dirpath, function (err, files)  {
  for (let i = 0; i < files.length; i += 1) {
    if (path.extname(files[i]) === ext) {
      console.log(files[i]);
    }
  }
});

/*
fs.readdir(dirpath, function (err, files)  {
//  files.forEach((file) => {
//    if (path.extname(file) === ext) {
//      console.log(file);
//    }
//  });

  const fltered = files.filter((file) => path.extname(file) === ext );
  filtered.forEach((file) => console.log(file));

});
*/
