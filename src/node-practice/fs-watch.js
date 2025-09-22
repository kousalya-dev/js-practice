const fs = require('fs')

const fileName = '../commons/user-data'

fs.readFile(fileName,(err,data)=>{
    if(err) throw err;
    const result = JSON.parse(data);
    result.users.forEach((value)=>{
        if(value.name === 'Bob'){
            value.role = "Server-Boy"
        }
    })

    fs.writeFile(fileName,JSON.stringify(result,null,2),(error)=>{
        if(error) throw error;
        console.log("File written successfully!");
    })
})

fs.watch(fileName,(eventType,file)=>{
// if(eventType && file === 'change'){
    console.log("File has been changed: ",file,eventType)
// }
})