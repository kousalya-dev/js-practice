let vowelCount = 0;
let consonantCount = 0;

let input = 'congratulations'
const vowel = ['a','e','i','o','u']

input.split('').forEach((value)=>{
    if(vowel?.includes(value)){
        vowelCount ++;
    }else{
        consonantCount ++;
    }
})
console.log('Total Vowels:',vowelCount,"Total consonants :",consonantCount)
