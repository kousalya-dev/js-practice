import Rect , {useState} from 'react'

export default function ComponentA (){
const [userName, setName] = useState(0); //useState example

useEffect (()=>{
   fetch('https://api.mypage')
   .then((data)=> data.json)
   .then((value) => {return value})
})

const handleClick = ()=>{
    setName('This is another name!')
}
    return(
        <div>
            Hello user! : {userName}
            <button onClick={() => {setName ('different name!')}}> Change name !</button>
        </div>
    )
}



