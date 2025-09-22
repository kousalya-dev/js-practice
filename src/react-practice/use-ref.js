import React, {useRef,useState} from 'react';

export default function ComponentC(){
    const ref = useRef();

    const onClickEvent=()=>{
    return alert(ref.current.value)
    }
    return(
        <div>
            <input ref={ref} placeholder="Enter the text.."></input>
            <button onClick={onClickEvent}>Show Me!</button>
        </div>
    )
}


export default function ComponentD(){
    const ref = useRef(0);
    const [state,setState] =useState(0)
    const clickEvent = ()=>{
        ref.current += 1;
        setState(ref.current);
    }
    return(
        <div>
            Current Value is : {state}
            <button onClick={clickEvent}>Increase</button>
        </div>
    )
}