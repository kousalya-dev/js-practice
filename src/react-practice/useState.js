import {useState,useEffect} from 'react'

function MyCounter(){
    const [state,setState] = useState(0);

    useEffect(()=>{
        console.log("state is changed :",state)
    },[state])

    useEffect(()=>{
        fetch('https://api.user-data')
        .then((res)=> res.json)
        .then((data)=> console.log(data))
    })
    return(
        <div>
            <div>Count is : {state}</div>
            <button onClick={()=>{setState(state+1)}}>Increment</button>
        </div>
    )
}