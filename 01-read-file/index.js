const fs = require('fs');
// fs.readFile('./01-read-file/text.txt', function(err, data){
//   if(err) throw err;
//   console.log(data.toString());
// });

const stream = fs.createReadStream(
  './01-read-file/text.txt',
  'utf8',
);


stream.on('data', (data) => console.log(data));
stream.on('error', (err) => console.log(`Err: ${err}`));