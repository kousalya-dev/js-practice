const fs = require('fs')

//write file ( if not exist it creates new)
let fileName1 = "kousalya.txt"
fs.writeFile(fileName1,"Hello kousalya! You are selected to this role!",(error)=>{
    if(error) throw error;
    console.log("Successfully created / Written the file!")
})
