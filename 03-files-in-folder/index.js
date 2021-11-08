const fs = require('fs');
const path = require('path');



fs.readdir('./03-files-in-folder', {withFileTypes: true}, (err, files) => {

  files.forEach((file) => {
    
    if(file.isFile()) {

      fs.stat(`./03-files-in-folder/${file.name}`, (err, data) => {
        let size = data.size;
        let fileName = (file.name).split('.').slice(0, -1).join('.');
        let extension =  path.extname(file.name).slice(1);
        console.log(`${fileName} - ${extension} - ${(size / 1024).toFixed(3)}kb`);

      });

    }

  });

});