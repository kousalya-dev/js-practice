import {useState} from 'react'

export default function ComponentA(){
    [value,setValue] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        return alert("Form is submitted")
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input type='text'  value={value} placeholder = 'Enter the name'/>
            <button type='submit'> Submit</button>
        </form>
    )
}