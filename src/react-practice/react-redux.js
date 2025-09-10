import {useSelector, useDispatch, Provider} from 'react-redux'
import {createStore} from 'redux'

function reducer(state,action){
    switch(action.type){
        case "INCREMENT" : return { count : state.count + 1}
        case "DECREMENT" : return {count : state.count - 1}
        default : return state
    }
}

const store = createStore(reducer);

function ComponentF(){
    const state = useSelector(state => state.count)
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Count is :{state}</h1>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    )
}

export default function App(){
    return (
        <Provider store={store}>
            <ComponentF />
        </Provider>
    )
}