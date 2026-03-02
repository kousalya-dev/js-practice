const fs = require('fs');

const readStream = fs.createReadStream('toReadFile.json');
const writeStream = fs.createWriteStream('toWriteStream.json');

readStream.pipe(writeStream);

readStream.on('data', (chunk)=> console.log('File data : ',chunk))
readStream.on('end',()=> console.log('File came to END'))
readStream.on('')