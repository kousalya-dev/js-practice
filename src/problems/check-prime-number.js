
let input = 29;

function isPrime(input){

    if(input <=1) return false;
    for(let i= 2; i <= Math.sqrt(input); i++){
        if(input % i === 0 ) {
            return false
        }
    }
    return true;
}


const out = isPrime(input);
console.log('out',out)