import  React,{useState,useEffect} from 'react'

export default function App(){
const [data,setData] = useState([]); //Data fetched from DB for user List
const [page,setPage] = useState(1); // To update the page value
const limit = 3; //Indicates the page limit

useEffect(()=>{
fetch(`https://userdb.com/fetchUser?page=${page}&limit=${limit}`).then(res => res.json()).then( res=> setData(res)).catch(err => console.log('Error while fetching data'))
},[page])

return(
<>
<h1>Users List</h1>
<ul>
{data.map((value,index)=> (
<li key={value.id}>{value}</li> 
))}
</ul>
<button disabled={page ===1} onClick ={()=> setPage(page -1)}>Prev</button>
<button onClick ={()=> setPage(page+1)}>Next</button>

</>
)
}