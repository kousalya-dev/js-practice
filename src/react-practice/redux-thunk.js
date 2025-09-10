import {useSelector, useDispatch, Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import {useEffect} from 'react'

const initialValue = {
    value : '',
    error : ''
}

function reducer(state = initialValue,action){
    switch(action.type){
        case 'FETCH_USER' : return {...state}
        case 'FETCH_SUCCESS' : return {...state, value: action.value}
        case 'FETCH_FAILURE' : return {...state, error: `Fetch Failed: ${action.value}`}
        default : return {...state}
    }
}

const store = createStore(reducer,applyMiddleware(thunk));

export default function myApp(){
    return(
        <Provider store={store}>
            <ComponentSample />
        </Provider>
    )
}

function fetchData(){
    return async(dispatch)=>{
        dispatch({type:'FETCH_USER'})
        try{
            const res = await fetch('//https/api.sentinel.com/fetch-user')
            const data = await res.json();
            if(data){
                dispatch({type:'FETCH_SUCCESS',value:data  || 'Kousalya'})
            }
        }catch(error){
            dispatch({type : 'FETCH_FAILURE', value: error.message})
        }
    }
}



function ComponentSample(){
    const {value,error} = useSelector(state => state) 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])
    return(
        <div>
            {value && <h1> Given Value is {value} </h1>}
            {error && <p>Error is : {error}</p>}
        </div>
    )
}

