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




import {useContext,createContext} from 'react'

const ContextCreator = createContext();

export default function ComponentC (){
    <ContextCreator.Provider value={"Kousalya"}>
        <MyComponent />
    </ContextCreator.Provider>
}

// kousalya-dev  kousalyasathya2001@gmail.com

// git config --global user.name "kousalya-dev"
// git config --global user.email "kousalyasathya2001@gmail.com"