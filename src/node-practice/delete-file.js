const fs= require('fs');

const fileName = '../commons/deletables/delete2.txt'

fs.unlink(fileName,(error, data)=>{
    if(error) throw error;
    console.log("Successfully deleted the file!")
})

