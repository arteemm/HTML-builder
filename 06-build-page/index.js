const fs = require('fs');
const path = require('path');
const stream = fs.createWriteStream(
  './06-build-page/project-dist/index.html',
  'utf8'
);
const styles = fs.createWriteStream(
  './06-build-page/project-dist/style.css',
  'utf8'
);
let str = '';
let array;

stream.on('error', (err) => console.log(`Err: ${err}`));
styles.on('error', (err) => console.log(`Err: ${err}`));

fs.mkdir('./06-build-page/project-dist',{ recursive: true }, (err) => {
  if (err) throw err;
});

fs.readFile('./06-build-page/template.html', 'utf8',(err, data) => {
  if (err) throw err;
 
  str = data;
  array = str.split('\n');

});

fs.readFile('./06-build-page/components/header.html', 'utf8',(err, header) => {

  array = array.map((item) => {
    if (item.includes('{{header}}')) {
      if (err) throw err;
      return item = header;
    }
    return item;
  });

});

fs.readFile('./06-build-page/components/footer.html', 'utf8',(err, footer) => {

  array = array.map((item) => {
    if (item.includes('{{footer}}')) {
      if (err) throw err;
      return item = footer;
    }
    return item;
  });

});

fs.readFile('./06-build-page/components/articles.html', 'utf8',(err, articles) => {

  array = array.map((item) => {
    if (item.includes('{{articles}}')) {
      if (err) throw err;
      return item = articles;
    }
    return item;
  });
  stream.write(array.join(''));
});

fs.readdir('./06-build-page/styles', {withFileTypes: true}, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    
    if (path.extname(file.name) === '.css') {
      fs.readFile(`./06-build-page/styles/${file.name}`, (err, date) => {
        if (err) throw err;
        styles.write(`${date}`);
      }); 
    }

  });
});

fs.readdir('./06-build-page/assets', {withFileTypes: true}, (err, directories) => {

  if (err) throw err;

  fs.mkdir('./06-build-page/project-dist/assets',{ recursive: true }, (err) => {

    if (err) throw err;
  });
  
  directories.forEach((directory) => {

    if (directory.isDirectory()) {
      fs.readdir(`./06-build-page/assets/${directory.name}`, {withFileTypes: true}, (err, files) => {
        fs.mkdir(`./06-build-page/project-dist/assets/${directory.name}`, { recursive: true }, (err) =>{
          if (err) throw err;
        });
        // console.log(files);
        files.forEach((file) => {
          fs.copyFile( `./06-build-page/assets/${directory.name}/${file.name}`, `./06-build-page/project-dist/assets/${directory.name}/${file.name}`, (err) => {
            if (err) throw err;
            // console.log(`${file.name} was copied to files-copy/${file.name}`);
          });
        });
      });
    } else {
      console.log(111);
    }
  
  });

});