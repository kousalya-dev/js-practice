let array = [1,453,767,34,12,656];

// function findLargeAndSmall(input){
//     const largestValue = input.reduce((acc,curr)=>{
//         acc > curr ? acc : curr
//     })
//     const smallestValue = input.reduce((acc,curr)=>{
//         acc < curr ? curr : acc
//     })
//     return {largestValue,smallestValue}

// }

// const {large,small}= findLargeAndSmall(array)

// console.log('large',large,'small',small)


function find(input){
    let largestValue = []
    for(let i = 0; i < input.length; i++){
        if(largestValue[0] > input[i]){
            largestValue[0] = largestValue[0];
        }else{
            largestValue[0] = input[i];
        }
    }
    return largestValue[0];
}


// import React, {Suspense} from 'react'

// const LazyComponent = React.lazy(()=> import ('./componentLazy');

// export default function App() {

// return (
// 	<div> 
// 	<Suspense fallback = { <div>Loading...</div>}>
// 	<LazyComponent />
// 	</Suspense>
// 	</div>
// )
// }


// db.orders.aggregate([
// {$match : { status : "completed"}},
// {$group : {_id :  "$customerId", totalOrders : { $sum : "$noOfOrders"}}} 
// ])


// db.order.aggregate([
// 	{
// 	$match : {  status : 'Completed' , noOfOrder: {'$exists' : true, '$ne' : null }
// 	},
// 	{ 
// 	$group : { _id : '$customer_id' , totalOrders : {$sum : "$noOfOrders"}}
// 	},
// 	{
// 	$sort : { noOfOrders : -1 }
// 	}
// ])



// secretKey = 'sfsdfsf23213'


// const token = jwt.sign(payload, secretKey, {expiresIn : '1h'})

// const  decoded = jwt.verify(token, secretKey, (err, decoded)=>{

// 	if(err) console.log('Token is invalid!);
	
// 	else console.log(`Hello user ${decoded.userName}`)
// });

// \


// handler : (req,res) =>{



// }

// const generateAccessToken = (user) =>{
// 	return jwt.sign(user, accessToken, {expiresIn : '1h'})
// }

// const generateRefreshToken = (user) =>{
// 		return jwt.sign(user, refreshToken, {expiresIn : '7d'}
// }




