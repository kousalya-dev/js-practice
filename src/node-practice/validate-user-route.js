import Hapi from '@hapi/hapi'

//database
const user = {
    name : 'kousalya',
    password : '12345'
}

const init = async()=>{
    const server = Hapi.server({
        port: 8080,
        host : 'localhost'
    })

    server.route({
        method: 'POST',
        path : '/validate-user',
        handler: async(req,h)=>{
            try{
            const {userName,userPassword} = req.payload
            if(userName && userPassword){
                const result = userName === user.name && userPassword === user.password ? 'Valid User !' : 'Invalid User'
                return {message : result}
            }
            }catch(err){
                console.log(err)
            }
        }
    })

    await server.start();
}

init();