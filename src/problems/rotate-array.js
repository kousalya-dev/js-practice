let array = [1,453,767,34,12,656];

function rotateArray (input){
    let length = input.length();
    let lastElement = input[length-1];

    for(let i = length -1; i>0; i--){
        arr[i] = arr[length -1]
    }

    arr[0] = lastElement;
    return arr
}

const result = rotateArray(array);
console.log('result',result)