import {useState} from 'react';

export default function FormValidation(){
    const [name,setName] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name) {
            setError("Name is required!")
        }else{
            setError('')
        }
        console.log('name is :',name)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/>
            <button type='submit'>Submit</button>
            {error && <p style={{color:'red'}}>Error</p>}
        </form>
    )
}