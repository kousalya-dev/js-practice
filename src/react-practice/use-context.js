import {createContext, useContext} from 'react';

const CreateContext = createContext();

function CreateOwnContext(){
    return(
        <CreateContext.Provider value={"kousalya"}>
            <MyComponent/ >
        </CreateContext.Provider>
    )
}

function MyComponent(){
    const propsCame = useContext(CreateContext);
    return (
        <h1>Value occured is : {propsCame} </h1>
    )
}