const fs = require('fs')

const fileName = '../commons/user-data'

fs.readFile(fileName,(err,data)=>{
    if(err) throw err;
    const result = JSON.parse(data);
    result.users.forEach((value)=>{
        if(value.name === 'Bob'){
            value.role = "Server-Boy"
        }
    })

    fs.writeFile(fileName,JSON.stringify(result,null,2),(error)=>{
        if(error) throw error;
        console.log("File written successfully!");
    })
})

fs.watch(fileName,(eventType,file)=>{
// if(eventType && file === 'change'){
    console.log("File has been changed: ",file,eventType)
// }
})



// db.collection.deleteOne({name:'kousalya'});
// db.collection.insertOne({name: 'kousalya', age : 25, address : "chennai"});

// db.users.find();

// db.users.find({name : 'kousalya'})

// db.users.find({age: 24 }, {name : 'kousalya'});

// db.users.findOne({age : 23});


// db.users.updateOne(
// {name : 'kousalya'},	// filtering goes here
// {$set : {age : 30}}	//updation part goes here
// ),

// db.users.updateMany(
// { name : 'kousalya'},
// {$set : {name : 'kousalya sathyamoorthy'}
// );

// //sorting query
// db.users.find().sort({name : 1})


// db.users.find().limit(3)

// //find count 

// db.users.countDocuments({address : "chennai"});

// db.users.countDocument({age:{$gt : 18 , $lt : 25}});

// db.users.countDocument({
// $or : [{address : 'chennai'}, {address: 'mumbai'}]
// }

// db.users.countDocument({
// $and : [{age: { $gt : 20}}, {age:{$lt : 40}}]
// }]


// db.sales.aggregate([
// {$match : {status : 'fulfilled'},
// { $group : {id: "$customerId" , totalAmount : {$sum : "$amount"}},
// {$sort : {totalAmount : -1}}
// ]);

db.collection.createIndex({userId :1});


db.collection.find({}, {name : 1, email: 1,  _id: 0});


// REACT

import React , {useState} from 'react';

export default function MyComponent(){
const [name, setName] = useState('');
const [password , setPassword] = useState('');

render(
<div>
<form onSubmit = {handleSubmit}>
<input type='text' placeholder = 'Enter your name' value = {name} onChange = {(e)=> e.target.value}/>
<input type = 'password' placeholder='Enter your password' value = {password} onChange = {(e)=> e.target.value} />
<button type = 'submit'> Submit</button>
</form>
</div>
)}




