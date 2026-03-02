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





function MyComponentA(){

    const [name, setName] = useState('');
    const referenceCreated = useRef();

    function sample(){
        referenceCreated.current.focus();
    }

    return (
        <input ref = {referenceCreated} onChange={(e)=> setName(e.target.value)} type='text' placeholder='Enter the name'  value={name}/>
    )
}




/* ORDER OF EXECUTION LIFECYCLE METHODS

Constructor
getDerivedStateFromProps
Render
componentDidMount


getDerivedStateFromProps
shouldComponentUpdate
Render
getSnapshotBeforeUpdate
componentDidUpdate


*/