const fs = require('fs');

const filename = "../commons/user-data"

//file read
fs.readFile(filename, (error, data)=>{
    if(error) throw error;
    const value = JSON.parse(data)
    console.log("Output: ",value)
})

//write file ( if not exist it creates new)
let fileName1 = "kousalya.txt"
fs.writeFile(fileName1,"Hello kousalya! You are selected to this role!",(error)=>{
    if(error) throw error;
    console.log("Successfully created / Written the file!")
})
