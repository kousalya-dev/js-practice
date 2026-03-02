import React,{Suspense, lazy} from 'react';

const MyComponent = lazy(()=> import('/lazyComponent'));

export default function app(){
    return (
        <div>
             <h1>Hello lazy Component</h1>
        <Suspense fallback={<div>...Loading</div>}>
            <MyComponent/>
        </Suspense>
        </div>
       
    )
}


import React, {Suspense, lazy} from React;

const LazyImport = lazy(()=> import('./myLazyComponent'))
export default function lazyComponent(){
	return(
		<div>
			<h1>This is my lazy component</h1>
			<Suspense fallback={<div>...Loading</div>}>
				<LazyImport />
			</Suspense>
		</div>
	)

}


/*
const fs = require('fs');

const readstream = fs.createReadStream('readStream.json');
const writeStream = fs.createWriteStream('writeStream.json');

readStream.pipe(writeSteam);

readStream.on('finish',()=> console.log());
readStream.on('on',()=>console.log());

fs.readFile('fileToRead.json', (error,data)=>{
	if(error) throw error;
	console.log('Data is :', data);	
})


const hapi = require('@hapi/hapi');
const jwt = require('jsonwebtoken');

const init = async(()=>{
	const server = Hapi.server(()=>{
	port : 3000
	host : 'localhost' 
	})
	server.route (()=>{
	method : 'GET',
	path : '/get-verified-user'
	handler : async()=>{
	try{
	const SECRET_KEY = 'adssteryewewQWErtertt'
	const payload = {username : 'kousalya', id: 100}
	const sign = jwt.sign(payload,SECRET_KEY,{expiresIn : 1h})
	const verify = jwt.verify(token,SECRET_KEY);
	if(verify.username){
	return 'user verified successfully !'
	}else{
	return 'Invalid user/token'
	}
	}catch(error){
	console.log('Error is : ' ,error);
	}
	}
	})
	await server.start();
	
})

init();





const Hapi = require('@hapi/hapi);
const jwt = require('jsonwebtoken');

const init = async ()=>{
	const server = Hapi.server ({port : 3000, host : 'localhost'});
	server.route ({
	method : 'GET',
	path : '/verify-user',
	handler : async()=>{
	try {
	const secretKey = 'fsdfgAgtytrRTUeawer'
	const payload= {username : 'kousalya', id: 1001}
	const sign = jwt.sign(payload,secretKey,{expiresIn:{'1h'});
	const verify = jwt.verify(sign, secretKey);
	if(verify.username) return 'valid user'
	else return 'Invalid user/token'
	}catch(error){
	console.log('Error is : ',error);
	} } }
	await server.start();
	}
init();



const Hapi = require('@hapi/hapi);
const jwt = require('jsonwebtoken');

const secretKey = 'eer$DSFASaewrer'
const init = async()=>{
	const server = Hapi.server ({host : 'localhost', port : 3000});
	server.state('token', ()=>{
	ttl : 60 * 60 * 1000,
	isSecure : false,
	isHttpOnly : true,
	sameSite : 'strict',
	path : '/',
	})
	server.route ({
	method : 'GET',
	path : '/login',
	handler : async(request,h)=>{
		try{
		const payload = {userName : 'kousalya', id : 101}
		const token = jwt.sign(payload,secretKey,{expiresIn : '1h' });
		return h
		.response({message : 'user signed successfully', token})
		.state('token',token);  
 		}catch(err){
		console.log('Error is : ',err);
		}
		}
	})

	server.route({
	method : 'GET',
	path : '/verify-user',
	handler : async(request,h)=>{
	try {
	const token = request.state.token
	if(!token) return h.response({message: 'Invalid user'});
	const user = jwt.verify(token,secretKey);
	if(user.userName){
	return h.response({message :'valid user', decoded : user});
	}else{
	return h.response({message :  'Invalid user'});
	} 
	}catch(err){
	console.log('Error is : ' ,err);
	}
	}
	})

	await server.start();
}

init();






import React, {Suspense, lazy} from 'react';

const LazyComponent = lazy(()=> import('./MyComponent'));

export default function app(){
return(
<div> 
<h1> Hello Component</h1>
<Suspense fallback ={<div> ...Loading</div>}>
<LazyComponent />
</Suspense>	
</div>
)
}



const Hapi = require("@Hapi/hapi");
const jwt = require('jsonwebtoken');

const secretKey = 'ErewrrREW3weW4435^%'

const init = async()=>{
	const server = Hapi.server({host : 'localhost', port : 3000})

	server.state('token',{
	ttl : 60 *60* 1000
	}

	server.route({
	method : 'GET',
	path : '/login'
	handler: async(request, h)=>{
	 const user = {userName : 'kousalya', password : '1234'}
	const token = jwt.sign(user, secretKey, {expiresIn : '1h' })
	return h
	.response({message:'Successfully signed', token}
	.state('token',token)
	})

	server.route(
	method : 'GET',
	path : '/verify-user,
	handler: (request, h)=>{
	const token = request.state.token
	if(!token) return h.response({message : 'Invalid user'})
	const user= jwt.verify(token, secretKey);
	if(user.username){
	return h.response({message: 'User verified successfully'})
	}
	else{
	return h. response({message : 'Invalid user'})
	}
	})
	await server.start();

}

init();










*/