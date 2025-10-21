
function checkPalindrome (input){
    let reversed = ''
    for(let i = input.length-1; i >=0; i--){
        reversed += input[i];
    }
    if(input === reversed) return 'Given string is palindrome!'
    else return 'Given string is not a palindrome'
}

let input = 'madam'
let output = checkPalindrome(input);
console.log('output',output);   