import Hapi from '@hapi/hapi'

//Database
const user = {
    name : 'kousalya',
    mail: 'kousalyas.official@gmail.com',
    phnNo: 9150799380,
    role : 'admin'
}

const init = async()=>{
    const server = Hapi.server({
        port : 8080,
        host: 'localhost'
    })

    server.route({
        method : 'GET',
        path : '/fetch-user',
        handler: async(req,h)=>{
            
        }
    })
}

init();