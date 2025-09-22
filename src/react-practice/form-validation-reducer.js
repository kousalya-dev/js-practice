// import {useReducer} from 'react'

// function reducer(state,action){
//     switch(action.type){
//         case 'VALIDATE' : return {...state, error: state.name ? '' : 'Name is required' }
//         case 'UPDATE_VALUE' : return {...state,name : action.value}
//     }
// }

// export default function ReducerValidation(){
//     const [state,dispatch] = useReducer(reducer,{name:'',error:''})

//     return(
//         <form onSubmit={(e)=> {e.preventDefault(); dispatch({type:'VALIDATE'})}}>
//             <input type= 'text' placeholder='Enter the name' value={state.name} onChange={(e)=> dispatch({type:'UPDATE_VALUE',value: e.target.value})}/>
//             <button type = 'submit'>Submit</button>
//             {state.error && <p style={{color:'red'}}> Error</p>}
//         </form>
//     )
// }




import {useReducer} from 'react';

function reducer (state,action){
    switch(action.type){
        case 'VALIDATE' : return {
            ...state, 
            error : state.name ? '' : 'Name is mandatory'
        }
        case 'UPDATE_VALUE' : return {
            ...state,
            name : action.value,
            error : ''
        }
    }
}

export default function ReducerValidation(){
    const [state,dispatch] = useReducer(reducer,{name :'', error: ''})

    return(
        <form onSubmit={(e)=> {e.preventDefault(); dispatch({type : 'VALIDATE'})}}>
            <input type='text' placeholder='Enter the name' value= {state.name} onChange={(e)=> dispatch({type: 'UPDATE_VALUE', value : e.target.value})}/>
            <button type='submit'> Submit</button>
            {state.error && <p style={{color:'red'}}>{state.error}</p>}
        </form>
    )
}













