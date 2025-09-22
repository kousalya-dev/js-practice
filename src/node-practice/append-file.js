const fs = require('fs')

const fileName = "../commons/user-data"

const rawData = {
    "id": 5,
    "name": "Sathyamoorthy",
    "email": "sathya@mail.com",
    "role": "user"
}

fs.appendFile(fileName,JSON.stringify(rawData,null,2),(error)=>{
    if(error) throw error;
    console.log("Sucessfully appended the value at the end!")
})