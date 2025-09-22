let array = [1,453,767,34,12,656];

function findSorted (input){
    for(let i =0; i<array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(input[i] > input[j]){
                let dummy = input[i]
                input[i] = input[j]
                input[j] = dummy
            }
        }
    }
    return input
}

const result = findSorted(array);
console.log('result',result)