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



// const memorize = useMemo(()=> HeavyLogic(value),[value])

const componentMemorize = React.memo(function reRender({value}){
    return <h1> This component given : {value} </h1>
});