let number = 1632
let arrayValue = number.toString().split('')
let result = ''
for(let i = arrayValue.length-1; i >= 0; i--){
    result += arrayValue[i]
}
console.log(arrayValue,'result',result)