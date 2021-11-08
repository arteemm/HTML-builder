const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const stream = fs.createWriteStream(
  './02-write-file/text.txt',
  'utf8'
);
stream.on('error', (err) => console.log(`Err: ${err}`));
stream.on('finish', () => console.log('best regards'));

rl.question('How are you? \n', (answer) => {
  if(answer === 'exit') {
    rl.close();
  } else {
    stream.write ( `${answer} \n` );
  }
  
});

rl.on('line', (input) => {
  if(input === 'exit') {
    rl.close();
  } else {
    stream.write ( `${input} \n` );
  }
  
});

rl.on('close', () => {
  stream.end();
});