import {useSelector, useDispatch, Provider} from 'react-redux'
import {createStore} from 'redux'

function reducer(state,action){
    switch(action.type){
        case "INCREMENT" : return { count : state.count + 1}
        case "DECREMENT" : return {count : state.count - 1}
        default : return state
    }
}

const store = createStore(reducer);

function ComponentF(){
    const state = useSelector(state => state.count)
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Count is :{state}</h1>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    )
}

export default function App(){
    return (
        <Provider store={store}>
            <ComponentF />
        </Provider>
    )
}


/*

{
_id : 1,
userName : 'kousalya',
comments : 'Good post'
}


db.collection.aggregate([
{
	$group:
	{ 
	_id : '$userName',
	totalComments : { $sum : '$comments'}
	},
	{ $sort : { totalComments : -1} },
	{ $limit : 3 }
}


db.collection.aggregate([
{ $group : { _id: '$category' , totalPost : {$sum : 1}}
])

db.reviewes.aggregate([{
{ $group : { _id : '$product', totalAverage : {$avg : '$rating'}}},
{$sort : -1}
})]


db.orders.aggregate([{
$group : { _id : '$user', totalOrders : { $sum : '$total'}},
$sort : { totalOrders  : -1}
})]


db.users.aggregate([
{$group :{ _id: '$user' , moreOrder : { '$sum' : 1}}},
{$match : { moreOrder : {$gt : 2} } }
}])

db.posts.aggregare([ {
{ $sort : {'$likes : -1}},
{$limit : -1},
{ $project : {_id : 0, title : 1, likes : 1}}
}])


SELECT .....
FROM Students 
JOIN Marks
ON Students.id = Marks.id;



SELECT Students.name, Marks.subject, Marks.score
FROM Students
LEFT JOIN Marks
ON Students.stud_id = Marks.stud_id



const {Worker} = require('worker_threads');

const workerThread = new Worker('./worker.js');

workerThread.on('message', (msg)=>{
console.log('Message posted by worker :' , msg);
});
workerThread.on('error', (err)=> console.log(err));
workerThread.on('exit', () => console.log('Worker finished'));


const {parentPort} = require('worker_threads');

let sum = 0;
for(let i=0; i<= 1000; i++){
	sum += i;
}

parentPort.postMessage(`sum is ${sum}`);

promise.resolve().then(()=>{
	console.log('Hello');
})




import {useState} from ' react';

export default function ComponentA(){
const [name, setName] = useState('');
const [mail, setMail] = useState('');

const handleSubmit = (e)=>{
	e.preventDefault();
	alert('Successfully submitted');
}

return(
<form onChange={handleSubmit}>
<input type = 'text' placeholder='Enter name' onChange ={(e)=> setName(name)} value={name} /> 
<input type='email' placeholder= 'Enter mail-id' onChange={(e)=> setMail(mail)} value ={mail} />
<button type='submit'>Submit</button>
</form>
)
}















*/