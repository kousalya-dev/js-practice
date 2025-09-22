import {useCallback, useState} from 'react'


const Child = React.memo(({onClick})=>{
    return(
        <div>
            <button onClick={onClick}>Click Me!</button>
        </div>
    )
})

function ComponentI(){
    const [state,setState] = useState('');
    const onClickFun = useCallback(()=>{
        setState(prev=> prev +1)
    },[])
    return(
        <div> 
            <Child onClick={onClickFun}/>
        </div>
    )
}