// import {useState} from 'react'

// export default function FormComponent(){
//     const [name,setName] = useState('');
//     const [password,setPassword] = useState('');
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         alert(`Your name is : ${name}and Password is : ${password}. keep it safe!`)
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/>
//             <input type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }


import React, {useState} from 'react';

export default function MyForm(){
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        alert(`$Successfully submitted : ${name}!`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name" value = { (e)=> setName(e.target.value)}/>
            <input type="password" placeholder ="Enter password" value={(e)=> setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    )
}