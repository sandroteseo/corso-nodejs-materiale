var filter = require('./modules/filter.js');

filter(process.argv[2], process.argv[3], (error,data) => {
  if(error)
    return console.error('Error: '+error);

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});

/*
'use strict'
    const filterFn = require('./solution_filter.js')
    const dir = process.argv[2]
    const filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/
