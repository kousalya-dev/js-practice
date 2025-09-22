/*
1️⃣ Promises

A Promise is an object representing the eventual result of an asynchronous operation.

It can be in one of three states:

pending → not resolved/rejected yet

fulfilled → operation succeeded

rejected → operation failed

*/


// const myPromise = new Promise((resolve,reject)=>{
//     if(55 > 15){
//         resolve("Im Greater")
//     }else{
//         reject("Im not Greater")
//     }
// })

// myPromise.then((data=> console.log(data))).catch((err) => err)


const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let boolean = false;
        if(boolean){
            resolve("Hello Kousalya");
        }else{
            reject("Hello undefined!")
        }
    },1000)
})

myPromise2.then((data=>{
    if(data){
        console.log("data",data)
    }
})).catch((error)=> console.log("error : ",error))