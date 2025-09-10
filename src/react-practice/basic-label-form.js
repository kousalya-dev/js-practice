import {useState} from 'react';

export default function LabelExample(){
    const [name, setName] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        alert(`Given name is: ${name} `)
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>
                    User Name is : 
                    <input required  min = {5} type='text' placeholder='Enter the name' value={name} onChange={(e)=> setName(e.target.value)}/>
                </label>
                <input type='number' max={3} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
} 



/*

<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <input type="number" min="1" max="10" />
  <input type="date" />
  <input type="color" />
  <input type="file" />
  <input type="checkbox" /> Agree
  <input type="radio" name="gender" value="male" /> Male
  <input type="radio" name="gender" value="female" /> Female
  <button type="submit">Submit</button>
</form>


class Sample extends React.component{
componentDidUpdate(){
}
}










*/