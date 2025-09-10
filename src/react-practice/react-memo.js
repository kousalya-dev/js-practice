import React,{useState} from 'react'

// Memorizes the component , doesnt re-render unless the property is getting changed.
const Child = React.memo(({name})=>{
    console.log("Inside the Memo Function!")
    return <div>My name is {name} </div>
})


function ComponentH(){
    const [state,setState] = useState(0);
    const [name, setName] = useState('Kousalya');
    return(
        <div>
            <button onClick={()=>{setName("Kousi Sathya")}}>Change Name</button>
            <button onClick={()=> {setState(state+1)}}>Change number</button>
            <Child name={name} />
        </div>
    )
}