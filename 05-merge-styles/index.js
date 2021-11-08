const fs = require('fs');
const path = require('path');
const stream = fs.createWriteStream(
  './05-merge-styles/project-dist/bundle.css',
  'utf8'
);

stream.on('error', (err) => console.log(`Err: ${err}`));

fs.readdir('./05-merge-styles/styles', {withFileTypes: true}, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {

    if (path.extname(file.name) === '.css') {
      fs.readFile(`./05-merge-styles/styles/${file.name}`, (err, date) => {
        if (err) throw err;
        stream.write(`${date}`);
      }); 
    }

  });
});

