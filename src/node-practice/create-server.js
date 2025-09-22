const Hapi = require('@hapi/hapi');

const init = async()=>{
    const server = Hapi.server({
        host : 'localhost',
        port : 8080
    })

    server.route({
        method : 'GET',
        path : '/api/user-details',
        handler : async()=>{
            try{
                let userName = 'Kousalya';
                let userAge = 25
                return {userName, userAge}

            }catch(error){
                console.log('Error is : ',error)
            }
        }
    })
    await server.start();
}
init();
