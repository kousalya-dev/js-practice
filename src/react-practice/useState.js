import {useState,useEffect,useContext} from 'react'

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

    useEffect(()=>{
        fetch("https://fetch-edit-userData").then((data)=> data.json()).then((value)=> {return value}).catch((error)=> {return error})
    })
    return(
        <div>
            <div>Count is : {state}</div>
            <button onClick={()=>{setState(state+1)}}>Increment</button>
        </div>
    )
}


const ThemeContext = React.createContext("Value");

function ComponentB(){
    const data = useContext(ThemeContext);
    return data;
}


const sampleFunction = async()=>{
    const result = await fetch('https://rule-file-fetch')
    const data = await result.json();
    return data;
}

sampleFunction();