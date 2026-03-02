const fs = require('fs');

const fileName = "../commons/user-data"

fs.readFile(fileName,(error,data)=>{
    if(error) throw error;
    const response = JSON.parse(data)
    response.users.forEach((value, index)=>{
        if(value.name === 'Alice'){
            value.name = 'Kousiiii'
        }
    })   
    //this params is mandatory - response, 2nd params is null (Filtering no need), 3rd params is indentation                                
    fs.writeFile(fileName,JSON.stringify(response,null,2),(error)=>{
    if(error) throw error;
        console.log("Sucessfully written file!")
})

})

