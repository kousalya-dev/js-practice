// | Method             | Behavior                               |
// | ------------------ | -------------------------------------- |
// | Promise.all        | Fails fast if one fails                |
// | Promise.race       | Returns first settled                  |
// | Promise.allSettled | Waits for all, gives success + failure |
// | Promise.any        | Returns first successful one           |



/*

Senior Software Engineer, Incedo – Chennai | Oct 2025 – Present
• Worked on the IOP module for packet-loss monitoring, supporting data loss analysis between network cells.
• Developed Node.js backend logic with SQL-based data processing, automating manual updates through data-cleanup scripts, validation rules, and conditional logic to improve data accuracy and reliability.

Hi, I'm Kousalya, I'm reaching out to explore any career opportunities available at your organization. 
Resume-link : https://drive.google.com/drive/folders/1VdPu3lN30Zm03pW4xI0pUA80xPxn23eB?usp=drive_link



Promise.resolve().then(()=> console.log("C"));
console.log("D");

setTimeout(()=> console.log("B"),0);

useEffect(()=>{
alert("Hello world");

,[]}




//main.js

const add = (a,b) => a+b;
const sub = (a,b) => a-b;

module.exports = {add,sub};


const math = require('./main.js');




const promise = new Promise((resolve, reject)=>{
if(2%2 ===0){
resolve("Success");
}else{
reject("Failed");
}
})

promise.then(res => return res).catch(err => console.log("Error is populated"))

const promise = new Promise((resolve,reject)=>{
let boolean = true;
if( boolean){
resolve('Sucess');
}else{
reject('Failure');
})

promise
.then((data)=> console.log('Data is : ' ,data))
.catch(error => console.log('Error is thrown :' ,error))



 //read file

const fs = require('fs');
const fileName = 'sample.txt'
fs.readFile(fileName,(data=>{
if(error) throw error;
const result = JSON.parse(data);
console.log("Result is :" ,data);
}))


const api = '/api/get-details'

fetch(api).then(res => {
if(!res.ok) throw new Error ("Error");
return res.json();
}).catch(error => console.log(error))


axios.get(api).then(res=>
return res.data;
).catch(error => console.log('Error caught :', error));

axios.get(api)
.then( res => res.data)
.catch( err => console.log('Error is :', err));


const api = '/api/v1/get-user'

fetch(api).then( res =>{
if(!res.ok) => throw new Error ('Error in fetch');
return res.json();
} ).catch(err => console.log('error is :', err);


axios.get(api).then( res => console.log(res.data)).catch(err => console.log(err));




const fs = require('fs');

const fileName = 'user-details.json'

fs.readFile(fileName,(data)=>{
 let value = JSON.parse(data);
 value.name.forEach((input,index)=>{
	if(input === 'kousalya'){
	input = 'Kousalya S'
	}
})

fs.writeFile(fileName, JSON.stringify(value,null,2),(err)=>{
if(err) throw new Error;
console.log('File written successfully!');
})
}):


import Hapi from '@hapi/hapi';

const user = {
 name : 'Kousalya',
password : 'Student@123'
}

const init = async()=>{

const server = Hapi.server({
port : 8080,
host : 'localhost'
})

server.route({
method : POST,
path : 'api/validate-user',
handler: async(req,res)=>{
try {
const {user}= req.payload;
if(user){
const result = user.name !== 'Kousalya' && user.password !== 'Student@123' ? 'Invalid user' : 'valid user';
return {message : result}
}
}
}catch(err){
console.log('Error is : ',err);
}
}
})

await server.start();
};

init();






const obj = {
  name: 'kousalya',
  role: 'developer',
  address: {
    city: 'chennai',
    pincode: 600119
  }
};


let result = {};

for(let outerdata in obj){
if(typeof obj[outerdata] === 'Object'){
   for(let innerdata in obj[outerdata]){
	result[innerdata] = obj[outerdata][innerdata];
}
} else{
result[outerdata] = obj[outerdata];
}
}





const user= {
  name: 'kousalya',
  role: 'developer',
  address: {
    city: 'chennai',
    pincode: 600119
  }
};


function printUser (user, key='user'){
let result = {}
for(let data in user){
let currentKey = `${key}.${data}` 

if(typeof user[data] === 'object'){
for(let innerOj in user[data]){
 printUser(user[data],currentKey);
}
}else{
console.log(result[currentKey]= user[data])
}
}
}

printUser(user)

const user= {
  name: 'kousalya',
  role: 'developer',
  address: {
    city: 'chennai',
    pincode: 600119
  }
};

function printUser (user, keyName ='user', result={}){
for(let key in user){
let currentKey = `${keyName}.${key}`

if(typeof user[key] === 'object'){
	printUser(key,currentKey,result)
}else{
result[currentKey] = user[key]
}
}
return result
}

printUser(user)



const promise1 = new Promise((resolve,reject)=>{
setTimeout(()=> {
resolve('I'm first user');
},1000)
});

const promise2 = new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve('I'm second user');
},2000)
});

const promise3 = new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve('I'm third user');
},1500)
})


Promise.all([promise1, promise2, promise3]).then((result)=> {
console.log(result)
}).catch((error)=> {
console.log(error)
})




function getUserDetails ()=>{

//Fetch
fetch("https://api.userDetails.com/users")
.then( response => response.json())
.then( result => console.log(result))
.catch( err => console.log('Error'))


//axios
axios.get("https://api.example.com/users")
.then(response => console.log(response.data))
.catch(error => console.log(error))

}

getUserDetails();







import { React } fom 'react';


const List = ({ items }) =>{
return ( 
<ul> {
items.map((value, index) => (
<li key= {index}> {value}</li>
))}
</ul>
)
}

export default List;


import { React } from 'react';
import List from './list';

export default function App(){
const users = ['kousalya','sheela','Manvitha'];
return (
<div>
<h1> List of users</h1>
<List items = {users}/>
</div>
)
}



import React from 'react';

export const ThemeContext = React.createContext();

export default function MyComponent(){
const [data, setData] = React.useState('');
return (
<div>
<ThemeContext.Provider value ='Dark'>
<MyTable />
<ThemeContext.Provider />
</div>
)
}



import React  from 'react';
import { useContext } from 'react'; 
import ThemeContext from './ThemeContext';

export default function MyTable() {
const contextValue = useContext(ThemeContext)
return(

)
}





import { Lazy } from 'react';

const LazyComponent = Lazy( ()=> { import('./MyLazyComponent)} );

export default function ComponentA (){

return (
<div>
<Suspense fallback = {<h1>...Loading </h1>}>
<LazyComponent />
<Suspense />
</div>
)
}

import { lazy, Suspense } from 'react';
 
const MyLazyComponent = lazy ( () => import ('./MyComponentA'));

export default function ComponentB () {
return (
<div>
<Suspense fallback = { <h1> ...Loading</h1> }
<MyLazyComponent />
<Suspense />
</div>
)
}



















*/