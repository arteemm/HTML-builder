const fs = require('fs');



fs.readdir('./04-copy-directory/files', {withFileTypes: true}, (err, files) => {

  if (err) throw err;

 
  fs.mkdir('./04-copy-directory/files-copy',{ recursive: true }, (err) => {

    if (err) throw err;
  });

  fs.readdir('./04-copy-directory/files-copy', {withFileTypes: true}, (err, data) => {
    if (err) throw err;
    data.forEach((item) => {
      if(item) {
        fs.unlink(`./04-copy-directory/files-copy/${item.name}`, () => {});
      }
    });
  
  

  files.forEach((file) => {
    fs.copyFile( `./04-copy-directory/files/${file.name}`, `./04-copy-directory/files-copy/${file.name}`, (err) => {
      if (err) throw err;
      console.log(`${file.name} was copied to files-copy/${file.name}`);
    });
  });
});
});

