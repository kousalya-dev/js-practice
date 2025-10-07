const fs = require('fs');

const fileRead = fs.createReadStream('myFile.json');
const fileWrite = fs.createWriteStream('newFile.json');

fileRead.pipe(fileWrite);

fileWrite.on('finish',()=>{
    console.log('Files writed successfully!');
})




