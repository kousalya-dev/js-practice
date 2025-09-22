let array = [1,453,767,34,12,656];

// function findLargeAndSmall(input){
//     const largestValue = input.reduce((acc,curr)=>{
//         acc > curr ? acc : curr
//     })
//     const smallestValue = input.reduce((acc,curr)=>{
//         acc < curr ? curr : acc
//     })
//     return {largestValue,smallestValue}

// }

// const {large,small}= findLargeAndSmall(array)

// console.log('large',large,'small',small)


function find(input){
    let largestValue = []
    for(let i = 0; i < input.length; i++){
        if(largestValue[0] > input[i]){
            largestValue[0] = largestValue[0];
        }else{
            largestValue[0] = input[i];
        }
    }
    return largestValue[0];
}