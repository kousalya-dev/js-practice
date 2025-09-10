import {useState, useEffect} from 'react'

// export default function useCalculation(){
//     const [value,setValue] = useState(0)
//     useEffect(()=>{
//         fetch("https//api-userAge")
//         .then(res=> res.json)
//         .then(output => setValue(output))
//         .cath(error => error)
//         return value +1
//     },[])
//     return(
//         <div>
//             Calculated value : {value}
//         </div>
//     )
// }


 function useToggle(initValue = false){
    const [state,setState] = useState();
    const toggle = () => setState(prev => !prev);
    return [state, toggle];
}

export default function MyComponent(){
    const [isActive, calltoggle] = useToggle(false);
    return(
        <div>
            <h1>The switch is {isActive ? 'ON' : 'OFF'}</h1>
            <button onClick={calltoggle}>Switch Button !</button>
        </div>
    )
}