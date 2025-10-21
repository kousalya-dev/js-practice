import {useReducer} from 'react'

function reducerFunction(state,action){
    switch(action.type){
        case "INCREMENT" : return {count : state.count + 1};
        case "DECREMENT" : return {count : state.count - 1};
        default : return state
    }
}


export default function ComponentE(){
    const [state, dispatch] = useReducer(reducerFunction,{count:0}) // reducer function , default value
    return(
        <div>
            <h1>Current Value : {state.count}</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
        </div>
    )
}




import {useReducer} from 'react';


function myReducer(state,action){
    switch(action.type){
        case 'Increment' : return {count : state.count+1}
        case 'Decrement' : return {count : state.count-1}
        default : return state
    }
}
export default function ComponentF(){
    const [state,dispatch] = useReducer(myReducer,{count :0})

    return (
        <div>
            <h1>Current Value is : {state.count}</h1>
            <button onClick={()=>{dispatch({type: 'Increment'})}}>Increment</button>
            <button onClick={()=>{dispatch({type: 'Decrement'})}}>Decrement</button>
            <button>Decrement</button>
        </div>
    )
}