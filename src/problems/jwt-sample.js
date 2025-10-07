const Hapi = require('@hapi/hapi');
const jwt = require('jsonwebtoken');
const secretKey = 'mysupresecretkey12344@#$%^&'
const init = async()=>{
    const server = Hapi.server({port : 3000, host : 'localhost'});

    server.route(()=>{
        method : 'GET'
        path : '/verify-user'
        handler : async((request,h)=>{
            try{
                const {userName} = request.payload;
                const token = jwt.sign({userName},secretKey,{expiresIn:'1h'})
                const verification = jwt.verify(token,secretKey);
                return `Hello verified user - ${verification.userName}`
            }catch(error){
                return h.response('Invalid user!').code(401);  
            }
        })
    })
}