import {useState, useMemo} from 'react'

function ComponentG(){
    const [state,setState] = useState();
    const calculation = useMemo(()=>{
        return state * 1000
    },[state])
    return(
    <div>Count is : {calculation}</div>
    )
}