var fs = require('fs');
var path = require('path');

module.exports = (dir, ext, callback) => {

  fs.readdir(dir, (err,files) => {
    if(err)
      return callback(err);

    files = files.filter( (single) => path.extname(single) === '.'+ext );

    callback(null, files);
  });

};

/*

    'use strict'
    const fs = require('fs')
    const path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/
